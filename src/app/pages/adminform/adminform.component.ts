import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryISO, SearchCountryField, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { CommonService } from 'src/app/services/common/common.service';
import { ShareableService } from 'src/app/_helpers/shareable.service';
import { PermissionsArray } from 'src/app/_helpers/permissions'
@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {
  SubadminForm:FormGroup
  selectedCountry : any = CountryISO.India;
  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  @ViewChild('inputMessage')
inputMessageRef: ElementRef;
  subAdminPicId: any;
  profileUrl: any;
  permissionArray: any[]=[];
  constructor(private fb:FormBuilder,private cm:CommonService,private service:ShareableService,private router:Router) {
    this.SubadminForm = this.fb.group({
      password:['',[Validators.required,Validators.minLength(8)]],
      firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      lastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      phoneNo:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
    })
}
ngOnInit(): void {
  this.permissionArray=PermissionsArray.permissions
  }
sendFile(fileData) {
    let formdata = new FormData()
    formdata.append('media', fileData);
    this.service.postApi(`upload/media/`,formdata).subscribe((res: any) => {
      console.log("Imager api called",res);
      if ([200,201].includes(res.code)) {
        this.cm.presentsToast('success', 'top-end','File uploaded successfully')
          this.subAdminPicId = res.data[0].id
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
            this.profileUrl =fileData.name
        }
      }else{
        this.cm.presentsToast('error', 'top-end','File format not supported')
      }
    }
  }

  SaveData(){

if(this.SubadminForm.valid){
  this.DataSubmission()
}else{
  this.SubadminForm.markAllAsTouched()
  // document.body.scrollTop = 0;
  //  document.documentElement.scrollTop = 0;
   this.inputMessageRef.nativeElement.scrollIntoView({ behavior: 'smooth'});
}
}

DataSubmission(){
  this.permissionArray.forEach(v => delete v.label)
let obj = {
  "first_name": this.SubadminForm.value.firstName,
  "last_name": this.SubadminForm.value.lastName,
  "image": this.subAdminPicId,
  "email":this.SubadminForm.value.email,
  "phone_no":this.SubadminForm.controls['phoneNo'].value?.number?this.SubadminForm.controls['phoneNo'].value?.number?.replace(/ /g,''):null,
  "country_code":this.SubadminForm.controls['phoneNo'].value?.dialCode?this.SubadminForm.controls['phoneNo'].value?.dialCode:null,
  "password": this.SubadminForm.value.password,
  "permissions": this.permissionArray
}
this.service.post(`sub-admin/create/`,obj).subscribe((res:any)=>{
  if ([200,201].includes(res.code)){
    this.cm.presentsToast('success', 'top-end','Sub Admin created')
    this.router.navigate(['/'])
  }
})
console.log('After delerted',this.permissionArray);

}
check(data)
{
  if(data.is_add_edit){
    data.is_view=true
  }
}


}
