import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common/common.service';
import { ShareableService } from 'src/app/_helpers/shareable.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./chng.scss']
})
export class changepasswordComponent {
  PhoneSignupForm:FormGroup
  obj:any
  Reference:any
  currentUser: any;
  ChangePasswordToute:any = `user/update-password/`
  IsToken :boolean = false
  constructor(private fb:FormBuilder,private router:Router,private service:ShareableService,private toaster:ToastrService,private com:CommonService) {
   this.currentUser = JSON.parse(sessionStorage.getItem(environment.TokenValue));
  }
ngOnInit(){
this.obj = this.service.SaveObj
if(this.currentUser && this.currentUser.token){
  this.IsToken = true
  this.PhoneSignupForm=this.fb.group({
    "oldPassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    "password":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    "cnfPassword":["",[Validators.required]]
  },{ validators: this.com.MustMatch('password', 'cnfPassword') })
}else{
  this.PhoneSignupForm=this.fb.group({
    "password":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    "cnfPassword":["",[Validators.required]]
  },{ validators: this.com.MustMatch('password', 'cnfPassword') })
}
  
}
changepass()
  {
  if(this.PhoneSignupForm.valid){
    this.CallChangePassword()
}else{
  this.PhoneSignupForm.markAllAsTouched()
}
}
  BackToDashboard()
  {
    window.history.back();
  }
  CallChangePassword(){
    if(this.currentUser && this.currentUser.token){
      this.ChangePasswordToute = `user/change-password/`
       this.obj = {
        current_password:this.PhoneSignupForm.value.oldPassword,
        new_password:this.PhoneSignupForm.value.password
        }
      }else{
        this.obj = {
         "email":this.obj?.email,
         "password":this.PhoneSignupForm.value.password
       }
        }
      this.service.putApi(this.ChangePasswordToute,this.obj).subscribe((res:any)=>{
        if([200,201].includes(res.code))
        {
         this.com.presentsToast('success', 'top-end', "Password has been changed successfully");
         window.history.back();
        }
      })
  }
}
