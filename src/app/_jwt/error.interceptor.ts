import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CommonService } from '../services/common/common.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router,  private commonService: CommonService,) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
          tap((data: any) => {
       
            
              if (data.body && data.body.code == 400) {
                this.commonService.presentsToast('error','top-end',data.body.message);
                  return Observable.throw(data.body.message);
              } else {
                  return data.body;
              }
          }),
          catchError(err => {
            if (err.error?.data != null && err.error?.data != undefined) {
              if (typeof err.error.data == 'object') {
                var errr = '';
                  Object.keys(err.error.data).forEach(key => {
                      if (typeof err.error.data[key] == 'object') {
                          Object.keys(err.error.data[key]).forEach(key2 => {
                         
                            errr = err.error.data[key][key2];
                          })
                      }
                  });
                  if(errr != ''){
                    this.commonService.presentsToast('error','top-end',errr);
                   
                  
                  }
              }
          }else {
            var error = (err?.error?.message || err.statusText)?err?.error?.message || err.statusText:'Server not responding'
            this.commonService.presentsToast('error','top-end',error);
            console.log("Err cal",err,'Errrrrr msg',error,err.statusText);
        }
              if (err.status === 401) {
                this.commonService.presentsToast('error','top-end','Not authorized');
                 sessionStorage.removeItem(environment.TokenValue);
                  this.router.navigate(['/login']);
              }
              var error = err.error?.error_description || err.error?.message || err.statusText || err?.message;
              return throwError(error);
          }));
  }
}
