import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common/common.service';
import { ShareableService } from 'src/app/_helpers/shareable.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements  OnInit {
  TermConditionForm:FormGroup
  TermsData: any;
  permissions: any;
  editPermission: boolean;
  viewPermission: boolean;
  constructor(private cm:CommonService,private fb:FormBuilder,private service:ShareableService) {
    this.TermConditionForm = this.fb.group({
      terms_and_conditon:['',Validators.required]
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
          this.cm.presentsToast('success', 'top-end','Terms and Conditions updated successfully')
        }
      })
    }else{
      this.TermConditionForm.markAllAsTouched()
    }
  }
  GetTerms(){
this.service.get(`admin/get-cms-details/`).subscribe((res:any)=>{
  if([200,201].includes(res.code)){
    console.log('Get Terms',res);
    this.TermsData = res.data
    this.TermConditionForm.controls['terms_and_conditon'].setValue(res.data?.terms_and_conditon)
  }
})
  }
}
