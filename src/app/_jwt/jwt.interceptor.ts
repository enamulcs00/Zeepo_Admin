import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private spinner:NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = JSON.parse(sessionStorage.getItem(environment.TokenValue));
    console.log("JWT called",currentUser);
    
  this.spinner.show();
  if (currentUser && currentUser.token) {
    request = request.clone({ setHeaders: {
      Authorization: `Bearer ${currentUser.token}`,
  }});
    this.spinner.show();
    return next
      .handle(request)
      .pipe(finalize(() => this.spinner.hide()));
  } else {
  return next.handle(request).pipe(finalize(() => this.spinner.hide()));
  }
}
}
