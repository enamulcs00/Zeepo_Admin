import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common/common.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
 
  constructor(private router: Router, private _comon : CommonService) { 
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> {
      return new Promise(async (resolve) => {
        const roles = route.data;
        if(this._comon.checkPermission(roles.permission,roles.type)) {
            resolve(true);
        } else {
            resolve(false)
            this.router.navigate(['pages/profile']);
            // this._noti.show("error", "You don't have the permission to access that page.")
        }
          
      })
  }
}

