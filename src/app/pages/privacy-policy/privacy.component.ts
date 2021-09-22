import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common/common.service';
import { ShareableService } from 'src/app/_helpers/shareable.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements  OnInit {
  TermConditionForm:FormGroup
  TermsData: any;
  constructor(private cm:CommonService,private fb:FormBuilder,private service:ShareableService) {
    this.TermConditionForm = this.fb.group({
      privacy_policy:['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.GetTerms()
  }
  SaveTerms(){
    if(this.TermConditionForm.valid){
      this.service.post(`admin/create-update-cms-details/`,this.TermConditionForm.value).subscribe((res:any)=>{
        if([200,201].includes(res.code)){
          this.GetTerms()
          this.cm.presentsToast('success', 'top-end','Privacy Policy updated successfully')
        }
      })
    }else{
      this.TermConditionForm.markAllAsTouched()
    }
  }
  GetTerms(){
this.service.get(`admin/get-cms-details/`).subscribe((res:any)=>{
  if([200,201].includes(res.code)){
    console.log('Get privacy',res);
    this.TermsData = res.data
    this.TermConditionForm.controls['privacy_policy'].setValue(res.data.privacy_policy)
  }
})
  }
}
