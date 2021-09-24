import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { CommonService } from 'src/app/services/common/common.service';

import { ShareableService } from 'src/app/_helpers/shareable.service';

export interface UserData {
  // hotelName: string,
  // productname:string,
  id: string,
  // orderdate:string,
  // deliverydate:string,
  // delivery_man:string,
  // coupon:string;
  // audio: string,
  name: string,
  // contact:string,
  address:string,
  ordered_item:string,
  price:string,
  // action:string,
  // status:string,
}
@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit{
  timer: number;
  LeadsList: any;
  IsActive:any=0
  count: any = 0;
  SearchValue: string = '';
  page:number = 1
  PageSize:number = 10
  closeResult: string;
  //table: any
  // displayedColumns: string[] = [ 'hotelName' ,'id', 'orderdate','deliverydate','delivery_man','price','coupon','status'];
  displayedColumns: string[] = ['serial_no', 'name', 'ordered_item', 'address', 'price'];
  displayedColumns2: string[] = ['serial_no', 'name', 'ordered_item', 'address', 'price'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  id: any;
  lng: number;
  lat: number;
  UserData: any;
  constructor(private modalService:NgbModal,private route:ActivatedRoute,private service:ShareableService,private router:Router,private cm:CommonService) {
   
    this.route.queryParams.subscribe((params)=>{
      this.id = params.id;
      if(this.id){
        this.service.get(`user/get-user-details-by-id/${params?.id}/`).subscribe((data:any)=>{
          if([200,201].includes(data.code)){
            this.UserData = data?.data
            this.lat = Number(data?.data?.latitude)
             this.lng = Number(data?.data?.longitude)
          
          }
          })
      }
     })
}
 

  discountModal(discount) {
    this.modalService.open(discount, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
ngOnInit(){
  this.GetLeads()
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
    let obj ={
      "draw": 2,
      "filter":this.IsActive,
      "user_id":this.id,
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
  this.service.post(`leads/get-all-leads-by-user-pagination-list/`,obj).subscribe((res:any)=>{
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



