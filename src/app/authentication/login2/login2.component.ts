import { Component, OnInit } from '@angular/core';
import {HttpService} from 'src/app/services/http/http.service';
import {CommonService} from 'src/app/services/common/common.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  loginForm:FormGroup;
  submitted = false;
  accesstoken: string;
  isRememberMeChecked = false;

  constructor(private http: HttpService, private cm: CommonService, private fb: FormBuilder, private router: Router) {
      
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
    console.log(this.loginForm.value);
    
    var params={
      'email':this.loginForm.value.email,
      'password':this.loginForm.value.password
    }
    if(this.loginForm.invalid){
        return;
      }
      if (this.loginForm.valid && this.submitted) {
          this.http.httpPost('login', this.loginForm.value).subscribe((res: any) => {
              if (res.code == 200) {
                  localStorage.setItem("accesstoken", res.data.token);
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
  }
  shownumbrForm() {
    this.loginform = !this.loginform;
    this.loginnumber = !this.loginnumber;
  }
  signotpform() {
    this.numberform = !this.numberform;
    this.otpform = !this.otpform;
  }
  onOtpChange(e) {
    console.log(e);
  }
}
