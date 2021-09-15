import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private routes:ActivatedRoute) {}

  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
    if(next.routeConfig.path=='login' || next.routeConfig.path=='forgot' || next.routeConfig.path=='reset' || next.routeConfig.path=='auth') {
      console.log('true');
      
      if(!(localStorage.accesstoken == '' || localStorage.accesstoken == undefined || localStorage.accesstoken == null))
      {
        this.router.navigateByUrl('/dashboard')
        return false;
      }
      else{
        return true;
      }
    }
    else{
      if(!(localStorage.accesstoken == '' || localStorage.accesstoken == undefined || localStorage.accesstoken == null))
      {
        return true;
      }
      else{ 
        localStorage.clear()
        this.router.navigateByUrl('/auth/login')
        return false;
      }
    }
  }
  
}
  
  