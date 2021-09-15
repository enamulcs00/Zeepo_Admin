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
      
      if(!(sessionStorage.ZeepToken == '' || sessionStorage.ZeepToken == undefined || sessionStorage.ZeepToken == null))
      {
        this.router.navigateByUrl('/dashboard')
        return false;
      }
      else{
        return true;
      }
    }
    else{
      if(!(sessionStorage.ZeepToken == '' || sessionStorage.ZeepToken == undefined || sessionStorage.ZeepToken == null))
      {
        return true;
      }
      else{ 
        sessionStorage.clear()
        this.router.navigateByUrl('/auth/login')
        return false;
      }
    }
  }
  
}
  
  