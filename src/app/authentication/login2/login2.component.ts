import { Component, OnInit } from '@angular/core';
import {HttpService} from 'src/app/services/http/http.service';
import {CommonService} from 'src/app/services/common/common.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {ShareableService} from 'src/app/_helpers/shareable.service'
import { apilist } from 'src/app/services/http/api.list';
@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.scss']

})
export class Login2Component implements OnInit{
  loginform = true;
  recoverform = false;
  loginnumber= false;
  numberform= true;
  otpform= false;
  ForgotPasswordForm:FormGroup
  loginForm:FormGroup;
  submitted = false;
  accesstoken: string;
  isRememberMeChecked = false;
  otpValue: any;

  constructor(private http: HttpService, private cm: CommonService, private fb: FormBuilder, private router: Router,private service:ShareableService,private apiList: apilist) {
      
   }

   ngOnInit(){

    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    })
    var rememberMe = JSON.parse(localStorage.getItem('rememberMe'));
  if (!(rememberMe == null || rememberMe == undefined || rememberMe == '')) {
    this.loginForm.controls['rememberMe'].patchValue(rememberMe);
    if (rememberMe == true) {
      var remembermeDetails = JSON.parse(localStorage.getItem('userEmail_pass'));
      this.loginForm.patchValue({
        email: remembermeDetails.email,
        password: remembermeDetails.password,
      })
    }
  } else {
    this.loginForm.controls['rememberMe'].patchValue(false);
  }
   }
   
  get f() { return this.loginForm.controls; }

  omitSpace(event){
    var keyCode = event.which ? event.which : event.keyCode           
    if (keyCode == 32) {
      return false;
    }
  }

  RememberMe(isRemember, param) {
    localStorage.setItem('rememberMe', this.loginForm.value.rememberMe);
    if (isRemember == true) {
      localStorage.setItem('userEmail_pass', JSON.stringify(param));
    } else {
      localStorage.removeItem('userEmail_pass');
    }
  }

  submit() {
    this.submitted=true;
    var params={
      'email':this.loginForm.value.email,
      'password':this.loginForm.value.password
    }
    if(this.loginForm.invalid){
        return;
      }
      if (this.loginForm.valid && this.submitted) {
          this.http.post(this.apiList.login, params).subscribe((res: any) => {
              if (res.code == 200) {
                sessionStorage.setItem(environment.TokenValue,JSON.stringify(res?.data));
                  this.cm.presentsToast('success', 'top-end', res.message);
                  this.router.navigateByUrl('/dashboard');
                  this.RememberMe(this.loginForm.value.rememberMe, params);
                }
              })
            }
          }

  

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
    this.ForgotPasswordForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
    })
  }
  shownumbrForm() {
    this.loginform = !this.loginform;
    this.loginnumber = !this.loginnumber;
  }
  signotpform() {
    this.recoverform = !this.recoverform
    this.loginnumber = !this.loginnumber
    this.otpform = !this.otpform;
  }
  onOtpChange(e) {
this.otpValue = e
  }
  ResetFor(ref){
    if(this.ForgotPasswordForm.valid){
          let obj = {"email":this.ForgotPasswordForm.value.email}
          this.Forgot(obj,ref)
        }else {
          this.ForgotPasswordForm.markAllAsTouched()
        }
    }
    Forgot(obj,onlyFor){
      this.service.put(`user/forgot-password/`,obj).subscribe((res:any)=>{
        if([200,201].includes(res.code)){
          this.cm.presentsToast('success', 'top-end', res.message);
          onlyFor=='forgot'?this.signotpform():''
        }
      })
    }
    ForgotOtp(obj){
      this.service.put(`user/forgot-verify-otp/`,obj).subscribe((res:any)=>{
        if([200,201].includes(res.code)){
        this.service.SaveObj = obj
        this.cm.presentsToast('success', 'top-end', res.message);
         this.router.navigate(['/changepassword'])
        }
      })
    }
    SendOtp(obj){
      this.service.post(`user/verify-otp/`,obj).subscribe((res:any)=>{
        if([200,201].includes(res.code)){
       sessionStorage.setItem("OtpDetails",JSON.stringify(obj));
       this.cm.presentsToast('success', 'top-end', res.message);
         this.router.navigate(['/changepassword'])
        }
      })
    }
    VerifyOtp(){
      if(this.otpValue && this.otpValue.length===4){
        let obj = {
          "email":this.ForgotPasswordForm.value.email,
          "otp":this.otpValue
           }
           this.ForgotOtp(obj)
      }else{
        this.cm.presentsToast('Error', 'top-end', 'Please enter 4-digit OTP');
      }
      }
}
