import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { CountryISO, SearchCountryField, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { CommonService } from 'src/app/services/common/common.service';
import { ShareableService } from 'src/app/_helpers/shareable.service';
import { environment } from 'src/environments/environment';
import { allCountries } from 'src/app/_helpers/country';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.scss']
})
export class ProfileComponent implements OnInit{
  ProfileImageUrl: string | ArrayBuffer;
    VendorDetails:any
    lat:any = 40.7127753;
    lng:any = -74.0059728;
    ProfileForm:FormGroup
    @ViewChild("placeRef") placesRef: GooglePlaceDirective;
    isLoading: boolean;
    profileImageId: any;
    AdminId: any;
    selectedCountry : any = CountryISO.India;
    SearchCountryField = SearchCountryField;
    CountryISO = CountryISO;
    PhoneNumberFormat = PhoneNumberFormat;
    preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
    
    constructor(private service:ShareableService,private router:Router,private fb:FormBuilder,private cm:CommonService) {
    this.AdminId= JSON.parse(sessionStorage.getItem(environment.TokenValue)).id;
  
    }
    ngOnInit(){
      this.ProfileForm = this.fb.group({
        address:['',[Validators.required]],
        firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
        // lastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
        phoneNo:['',[Validators.required]],
        email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
   })
      this.GetVendorProfile()
    }
    GetVendorProfile(){
      this.service.get(`user/get-user-details-by-token/`).subscribe((res:any)=>{
        console.log('Admin get',res);
        if([200,201].includes(res.code)){
          this.SetValueInForm(res.data)
       this.VendorDetails = res.data;
       this.profileImageId = res?.data?.image?.id
       this.ProfileImageUrl =  res?.data?.image?.media_file_url
       this.lat = Number(this.VendorDetails?.latitude)
       this.lng = Number(this.VendorDetails?.longitude)
       let findIndex = allCountries.find(x=>{
        const phone = res?.data?.country_code?.split('+');
        return x[2] == phone[1].trim();
      })
      this.selectedCountry = (findIndex != undefined)?findIndex[1]:CountryISO.India;
    }
      })
    }
    SetValueInForm(obj){
    this.ProfileForm.controls['firstName'].setValue(obj?.first_name)
    // this.ProfileForm.controls['lastName'].setValue(obj?.last_name)
    this.ProfileForm.controls['address'].setValue(obj?.address)
    this.ProfileForm.controls['phoneNo'].setValue(obj?.phone_no?obj?.phone_no:null)
    this.ProfileForm.controls['email'].setValue(obj?.email?obj?.email:null)
    
    } 
  sendFile(fileData) {
    let formdata = new FormData()
    formdata.append('media', fileData);
    this.service.postApi(`upload/media/`,formdata).subscribe((res: any) => {
      console.log("Imager api called",res);
      if ([200,201].includes(res.code)) {
        this.profileImageId = res.data[0].id
          this.ProfileImageUrl = res.data[0].media_file_url
      }
    });
  }
  uploadFile(event) {
    if (event.target.files && event.target.files[0]) {
      var type = event.target.files[0].type;
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
        let fileData = event.target.files[0];
        this.sendFile(fileData)
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.ProfileImageUrl = event.target.result;
        }
      }
    }
  }
  public AddressChange(address: any,ref) {
     this.ProfileForm.controls['address'].setValue(ref.value)
      this.lat = address.geometry.location.lat()
      this.lng = address.geometry.location.lng()
  
  }
  updateProfileFn() {
    if(this.ProfileForm.valid){
      let obj = {
            "id": this.AdminId,
            "first_name": this.ProfileForm.value.firstName,
            // "last_name": this.ProfileForm.value.lastName,
            "phone_no":this.ProfileForm.controls['phoneNo'].value?.number?this.ProfileForm.controls['phoneNo'].value?.number?.replace(/ /g,''):null,
            "country_code":this.ProfileForm.controls['phoneNo'].value?.dialCode?this.ProfileForm.controls['phoneNo'].value?.dialCode:null,
            "email": this.ProfileForm.value.email,
            "address": this.ProfileForm.value.address,
            "image": this.profileImageId,
            "latitude": this.lat,
            "longitude":this.lng
        }
      this.service.put(`user/update-user-details/${this.AdminId}/`, obj).subscribe((res:any) => {
        this.GetVendorProfile()
          this.service.subject.next(true)
         this.cm.presentsToast('success','top-end',"Profile updated successfully.");
          this.router.navigate(['/dashboard']);
          this.isLoading = false;
     
      }, _ => {
        this.isLoading = false
      })
    }else{
      this.ProfileForm.markAllAsTouched()
    }
  }
}
