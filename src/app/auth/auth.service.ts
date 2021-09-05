import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  getadmin(model:any): Observable<any> {
    return this.http.post(`${environment.Base_URL}getadmin`,model);
  }
  islogin(){
    if(sessionStorage.getItem('islogin')){
      return true
    }
    return false;
  }
}
