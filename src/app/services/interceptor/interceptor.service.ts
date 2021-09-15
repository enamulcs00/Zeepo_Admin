import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize, retry, tap } from "rxjs/operators";
import { CommonService } from '../common/common.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  private AUTH_HEADER = "Authorization";
  private token: string;
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  
  constructor(
    private commonService: CommonService,
    private router: Router,
    private ngxService: NgxUiLoaderService
  ) {
    if(sessionStorage.ZeepToken != undefined || sessionStorage.ZeepToken != null) {
      this.token = sessionStorage.ZeepToken.token
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if (!req.headers.has('Content-Type')) {
    //   req = req.clone({
    //     headers: req.headers.set('Content-Type', 'application/json')
    //   });
    // }
    this.ngxService.start();
    return next.handle(req).pipe(
      // retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 403) {
          sessionStorage.removeItem(environment.TokenValue)
          this.router.navigateByUrl('/login');
        }
        if (error.status == 401) {
          // 401 handled in auth.interceptor
          // this.commonService.presentsToast('error','top-end','you are logout for security purpose.');
          sessionStorage.removeItem(environment.TokenValue)
          this.router.navigateByUrl('/login');
        }
        return throwError(error);       
      }),
      finalize(() => { this.ngxService.stop(); }),
      tap(event => {
        var eventRes = JSON.parse(JSON.stringify(event));
        // console.log(eventRes);
        
        if(eventRes.body) {
          if(eventRes.body.code === 400) {
            if(eventRes.body.error) {
              this.commonService.openDialog('error',eventRes.body.error);
              // this.commonService.presentsToast('error','top-end',eventRes.body.error);
            } else if(eventRes.body.message) {
              this.commonService.openDialog('error',eventRes.body.message);
              // this.commonService.presentsToast('error','top-end',eventRes.body.message);
            }
          }
        }
      }, error => {
        switch(error.status) {
          case 401:
            /***  Auto LogOut if Api response 401 ** */
            this.commonService.presentsToast('warning','top-end', "You have been logged out for security purpose.");
            this.router.navigate([`/login`]);
            sessionStorage.clear();
            break;
          case 500:
            /*** If api does not respond  ** */ 
            this.commonService.presentsToast('warning','top-end','Api Not Working');
            break;

          default:
            if(error.error) {
              this.commonService.openDialog('error',error.error.message);
              // this.commonService.presentsToast('error','top-end',error.error.message);
            } else {
              this.commonService.openDialog('error',error.message);
              // this.commonService.presentsToast('error','top-end',error.message);
            }
        }
        
      })
    );
  }
}
