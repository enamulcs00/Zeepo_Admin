import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { Router, Event, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  permissions =JSON.parse(sessionStorage.getItem(environment.TokenValue)).permissions
  Role = JSON.parse(sessionStorage.getItem(environment.TokenValue))?.role
  checkArr = [];
  public sidebarnavItems: any[];
  route_url: string;
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.route_url=this.router.url;
    for(let param of this.permissions) {
      this.checkArr.push(param?.module?.name);
  }
  }

  // End open close
  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter((sidebarnavItem) => {
      if (this.Role == 4) {
        for (let index = 0; index < this.checkArr.length; index++) {
          if (this.checkArr[index] == sidebarnavItem.title) {
            return sidebarnavItem;
          }
        }
      } else {
        return sidebarnavItem;
      }
    });
    
  }

  ClickListen() {
     this.router.events.subscribe((event: Event) => {
     this.spinner.show();
      if (event instanceof NavigationStart) {
        this.spinner.show();
      }

      if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }

      if (event instanceof NavigationError) {
        this.spinner.hide();
      }
    });
  }
}
