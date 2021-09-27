import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common/common.service';
import { ShareableService } from 'src/app/_helpers/shareable.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  TermConditionForm:FormGroup
  TermsData: any;
  permissions: any;
  editPermission: boolean;
  viewPermission: boolean;
  constructor(private cm:CommonService,private fb:FormBuilder,private service:ShareableService) {
    this.TermConditionForm = this.fb.group({
      email: ['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],

    })
   }

  ngOnInit(): void {
    this.permissions = JSON.parse(
      sessionStorage.getItem(environment.TokenValue)
    ).permissions;
    if (this.permissions.length==0 || this.permissions == null ||this.permissions == undefined) {
      this.editPermission = true;
      this.viewPermission = true;
    } else {
      this.editPermission = this.permissions[1].is_add_edit;
      this.viewPermission = this.permissions[1].is_view;
    }

    this.GetTerms()
  }
  SaveTerms(){
    if(this.TermConditionForm.valid){
      this.service.post(`admin/create-update-cms-details/`,this.TermConditionForm.value).subscribe((res:any)=>{
        if([200,201].includes(res.code)){
          this.GetTerms()
          this.cm.presentsToast('success', 'top-end', 'Contact Us updated successfully');
        }
      })
    }else{
      this.TermConditionForm.markAllAsTouched()
    }
  }
  GetTerms(){
this.service.get(`admin/get-cms-details/`).subscribe((res:any)=>{
  if([200,201].includes(res.code)){
    console.log('Get about_us',res);
    this.TermsData = res.data
    this.TermConditionForm.controls['email'].setValue(res.data.email)
  }
})
  }
}
