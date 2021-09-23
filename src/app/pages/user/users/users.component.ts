import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
import { CommonService } from 'src/app/services/common/common.service';
import { ShareableService } from 'src/app/_helpers/shareable.service';
export interface UserData {
  serial_no:string,
  name: string,
  lastname: string,
  gender: string,
  age: string,
  web:string,
 // completedOrders:string,
  // id: string,
  //cancelledOrders:string,
  //totalOrders:string,
  contact:string,
  email:string;
 status:string,
  action:string,
  address:string,
 // pendingOrders:string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  closeResult: string;
  timer: number;
  UsersList: any;
  count: any = 0;
  SearchValue: string = '';
  page:number = 1
  PageSize:number = 10
  //table: any
  displayedColumns: string[] = [ 'serial_no','name', 'email','contact','address', 'web','status','action'];
  dataSource: MatTableDataSource<UserData>;
  userId: any;
  constructor(private modalService: NgbModal,private service:ShareableService,private cm:CommonService) {
 
  }
  ngOnInit(): void {
    this.GetUsers()
  }
  
discountModal(discount) {
    this.modalService.open(discount, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
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
  this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userprofileModal(userDelete) {
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userDeleteModal(userDelete,id) {
  this.userId = id
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
userDetailModal(userDetail) {
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
addUserModal(addUser) {
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
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
DeleteAdmin(){
  this.service.delete(`user/change-user-status/${this.userId}/`).subscribe((res:any)=>{
    if([200,201].includes(res.code)){
      this.GetUsers()
      this.modalService.dismissAll()
      this.cm.presentsToast('error','top-end','User deleted successfully')
    }
  })
}
changeStatus(event, id) {
  const data = {
    is_active: event.checked,
  };
  this.service.put(`user/change-user-status/${id}/`, data).subscribe((res: any) => {
    if([200,201].includes(res.code)){
   this.cm.presentsToast('success','top-end',event.checked?'Status Activated':'Status Deactivated')
 }
 });
}
Filter(event: any) {
  window.clearTimeout(this.timer);
  this.timer = window.setTimeout(() => {
    let filterValue = (event.target as HTMLInputElement).value;
    this.SearchValue=filterValue;
   this.GetUsers();
  }, 1000)
}
openWebsiteLink(link){
  if(link!='---') {
    window.open(link)
  }
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
  this.GetUsers();
  return e;
}

GetUsers(){
  let obj = {
    "draw": 2,
    "filter":0,
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
this.service.post(`user/get-user-web-pagination-list/`,obj).subscribe((res:any)=>{
  if([200,201].includes(res.code)){
    console.log('Get Leads data',res);
    this.dataSource = new MatTableDataSource(res?.data);
    this.count = res?.recordsTotal
}else{
  this.count = 0
}
  })
}
}
