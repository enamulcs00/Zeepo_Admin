import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { apilist } from './api.list';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private apiList: apilist
  ) { }


  // Post method code .......
  // httpLoginPost(url: string, params) {
  //   return this.http.post(this.baseUrl + this.apiList[url], params).toPromise().then();
  // }

  httpPost(url: string, params): Observable<Object> {
    return this.http.post(this.baseUrl + this.apiList[url], params);
  }

  // Post method with Header  code .......

  httpPostWithHeader(url: string, params: any, mime: boolean): Observable<Object> {
    return this.http.post(this.baseUrl + this.apiList[url], params, this.header(mime));

  }


  httpPatchWithHeader(url: string, params: any, mime: boolean): Observable<Object> {
    console.log(params);

    return this.http.patch(this.baseUrl + this.apiList[url], params, this.header(mime));

  }

  httpPostWithParam(url: string, id: string, params: any): Observable<Object> {
    return this.http.post(this.baseUrl + this.apiList[url] + "/" + id, params);
  }

  httpPostWithHeaderParam(url: string, id: string, params: any, mime: boolean): Observable<Object> {
    return this.http.post(this.baseUrl + this.apiList[url] + "/" + id, params,this.header(mime));

  }

  // Get method with header code .......
  httpGetWithHeaderParam(url: string, params, mime: boolean): Observable<Object> {
    return this.http.get(this.baseUrl + this.apiList[url] + "/" + params, this.header(mime));
  }

  httpGetWithParam(url: string, params): Observable<Object> {
    return this.http.get(this.baseUrl + this.apiList[url] + "/" + params);
  }


  // Put method with Header code .......

  httpPutWithHeader(url: string, Id, params, mime: boolean): Observable<Object> {
    return this.http.put(this.baseUrl + this.apiList[url] + "/" + Id, params, this.header(mime));
  }

  httpPut(url: string, params, mime: boolean): Observable<Object> {
    return this.http.put(this.baseUrl + this.apiList[url], params, this.header(mime));
  }  

  httpDeleteWithHeader(url: string, Id, mime: boolean): Observable<Object> {
    return this.http.delete(this.baseUrl + this.apiList[url] + "/" + Id, this.header(mime));
  }


  // get method with header & Queryparam code .......
  httpGetWithHeaderQueryParam(url: string, params, mime: boolean): Observable<Object> {
    return this.http.get(this.baseUrl + this.apiList[url] + "?" + params, this.header(mime));
  }

  httpPutByQueryParam(url: string, Id, params, mime: boolean): Observable<Object> {
    return this.http.put(this.baseUrl + this.apiList[url] + "?" + Id, params, this.header(mime));
  }


  // // Get method code .......

  httpGetWithHeader(url: string, mime: boolean): Observable<Object> {
    return this.http.get(this.baseUrl + this.apiList[url], this.header(mime));
  }

  httpGet(url: string): Observable<Object> {
    return this.http.get(this.baseUrl + this.apiList[url]);
  }

  fileUpload(fileData: any) {
    var formData = new FormData();
    formData.append('image', fileData, fileData.name);
    const headers = new HttpHeaders({
      "mimeType": "multipart/form-data",
      auth: localStorage.accessToken
    });

    const headerObj = { headers };
    return this.http.post(this.baseUrl + this.apiList['uploadFile'], formData, headerObj);
  }

  header(mime) {
    if (localStorage.accesstoken && mime) {
      let headers = new HttpHeaders({
        // "mimeType": "multipart/form-data",
        authorization: localStorage.accesstoken
      });
      const option = {
        headers
      };
      return option;
    }
    if (localStorage.accesstoken && !mime) {
      let headers = new HttpHeaders({
        'content-type': 'application/json',
        // "mimeType": "multipart/form-data",
        authorization: localStorage.accesstoken
      });
      const option = {
        headers
      };
      return option;
    }
  }
}
