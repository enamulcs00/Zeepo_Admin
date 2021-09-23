import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
import { CommonService } from 'src/app/services/common/common.service';
import { ShareableService } from 'src/app/_helpers/shareable.service';
@Component({
  selector: 'app-bikes',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'] 
})
export class BikesComponent implements OnInit {
  timer: number;
  LeadsList: any;
  IsActive:any=0
  count: any = 0;
  SearchValue: string = '';
  page:number = 1
  PageSize:number = 10
  ngOnInit(): void {
    this.GetLeads()
  }
  closeResult: string;
  constructor(private modalService: NgbModal,private service:ShareableService,private cm:CommonService) {
 
  }

// This is for the first modal
open1(content1) {
  this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
openWindowCustomClass(content3) {
  this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
userprofileModal(userDelete) {
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userDeleteModal(userDelete) {
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
addBikeModal(addBike) {
  this.modalService.open(addBike, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userDetailModal(userDetail) {
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
Filter(event: any) {
  window.clearTimeout(this.timer);
  this.timer = window.setTimeout(() => {
    let filterValue = (event.target as HTMLInputElement).value;
    this.SearchValue=filterValue;
   this.GetLeads();
  }, 1000)
}

onPaginateChange(e): PageEvent {
  if (e.pageIndex == 0) {
    this.page = e.pageIndex;
  } else {
    if (e.previousPageIndex < e.pageIndex) {
      this.page =this.page+ e.pageSize;
    } else {
      this.page =this.page-e.pageSize;
    }
  }
  this.PageSize = e.pageSize
  this.GetLeads();
  return e;
}

GetLeads(){
  let obj = {
    "draw": 2,
    "filter":this.IsActive,
    "columns": [
        {
            "data": "first_name",
            "name": "",
            "searchable": true,
            "orderable": true,
            "search": {
                "value": "",
                "regex": false
            }
        },
        {
            "data": "last_name",
            "name": "",
            "searchable": true,
            "orderable": true,
            "search": {
                "value": "",
                "regex": false
            }
        },
        {
            "data": "phone_number",
            "name": "",
            "searchable": true,
            "orderable": true,
            "search": {
                "value": "",
                "regex": false
            }
        },
        {
            "data": "email",
            "name": "",
            "searchable": true,
            "orderable": true,
            "search": {
                "value": "",
                "regex": false
            }
        },
        {
            "data": "id",
            "name": "",
            "searchable": true,
            "orderable": true,
            "search": {
                "value": "",
                "regex": false
            }
        }
    ],
    "order": [
        {
            "column": 3,
            "dir": "undefined"        }
    ],
    "start": this.page,
    "length": this.PageSize,
    
    "search": {
        "value": this.SearchValue,
        "regex": false
    }
}
this.service.post(`leads/get-all-leads-pagination-list/`,obj).subscribe((res:any)=>{
  if([200,201].includes(res.code)){
    console.log('Get Leads data',res);
    this.LeadsList = res?.data
    this.count = res?.recordsTotal
}else{
  this.count = 0
}
  })
}
FilterByStatus(ref){
  this.SearchValue =''
this.IsActive = ref
 this.GetLeads()

}
}
