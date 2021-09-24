import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { CountryISO, SearchCountryField, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { CommonService } from 'src/app/services/common/common.service';
import { allCountries } from 'src/app/_helpers/country';
import { ShareableService } from 'src/app/_helpers/shareable.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  @ViewChild("placeRef") placesRef: GooglePlaceDirective;
  isLoading: boolean;
  profileImageId: any;
  Userform:FormGroup
  
   reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  selectedCountry : any = CountryISO.India;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  id: any;
  lng: number;
  lat: number;
  constructor(private route:ActivatedRoute,private service:ShareableService,private router:Router,private fb:FormBuilder,private cm:CommonService) {
    this.route.queryParams.subscribe((params)=>{
      this.id = params.id;
      if(this.id){
        this.service.get(`user/get-user-details-by-id/${params?.id}/`).subscribe((data:any)=>{
          if([200,201].includes(data.code)){
            console.log('Get by id',data);
            this.setFormsValue(data?.data)
            this.lat = Number(data?.data?.latitude)
             this.lng = Number(data?.data?.longitude)
            let findIndex = allCountries.find(x=>{
           const phone = data?.data?.country_code?.split('+');
        return x[2] == phone[1].trim();
      })
      this.selectedCountry = (findIndex != undefined)?findIndex[1]:CountryISO.India;
          }
          })
      }
     })
}

  ngOnInit(): void {
    this.Userform = this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      web:['',[Validators.pattern(this.reg)]],
      phoneNo:['',[Validators.required]],
      address:['',Validators.required],
      // lastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
    })
  }
  setFormsValue(obj){
    this.Userform.controls['firstName'].setValue(obj?.first_name)
    // this.Userform.controls['lastName'].setValue(obj?.last_name)
    this.Userform.controls['phoneNo'].setValue(obj?.phone_no?obj?.phone_no:null)
    this.Userform.controls['email'].setValue(obj?.email?obj?.email:'')
    this.Userform.controls['web'].setValue(obj?.company_website?obj?.company_website:'')
    this.Userform.controls['address'].setValue(obj?.address?obj?.address:'')
  

  }
  public AddressChange(address: any,ref) {
    this.Userform.controls['address'].setValue(ref.value)
     this.lat = address.geometry.location.lat()
     this.lng = address.geometry.location.lng()
 }
 updateProfileFn() {
  if(this.Userform.valid){
    let obj = {
          "id": this.id,
          "first_name": this.Userform.value.firstName,
          // "last_name":this.Userform.value.lastName,
          "phone_no":this.Userform.controls['phoneNo'].value?.number?this.Userform.controls['phoneNo'].value?.number?.replace(/ /g,''):null,
          "country_code":this.Userform.controls['phoneNo'].value?.dialCode?this.Userform.controls['phoneNo'].value?.dialCode:null,
          "email": this.Userform.value.email,
          "address": this.Userform.value.address,
          "company_website":this.Userform.value.web,
          "latitude": this.lat,
          "longitude":this.lng
      }
    this.service.put(`user/update-user-details/${this.id}/`, obj).subscribe((res:any) => {
      this.cm.presentsToast('success','top-end',"User updated successfully.");
      this.router.navigate(['/pages/users'])
     })
  }else{
    this.Userform.markAllAsTouched()
  }
}
}
