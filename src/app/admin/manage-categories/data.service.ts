import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  addcategory(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}addcategory`, model);
  }
  dispcategory(): Promise<any> {
    return this.http.get(`${environment.Base_URL}getcategory`).toPromise();
  }

   getcategoryByid(id: any): Promise<any> {
    return this.http.get(`${environment.Base_URL}getcategoryByid/${id}`).toPromise();
  }

updatecategory(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updatecategory`, model);
  }

      deletecategory(id: any) {

    return this.http.delete(`${environment.Base_URL}deletecategory/${id}`);
  } 

  /* blogs */
  addblog(model: any): Observable<any> {
    return this.http.post(`${environment.Base_URL}addblogs`, model);
  }

  dispblog(): Promise<any> {
    return this.http.get(`${environment.Base_URL}getblogs`).toPromise();
  }

  getblogByid(id: any): Promise<any> {
    return this.http.get(`${environment.Base_URL}getblogsByid/${id}`).toPromise();
  }

  updateblog(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updateblog`, model);
  }

  deleteblog(id: any) {

    return this.http.delete(`${environment.Base_URL}deleteblog/${id}`);
  } 

  postFile(  fileupload:File):Observable<any>{
    const endpoint=environment.Base_URL+'upload';
    const formdata:FormData=new FormData();
    formdata.append('image',fileupload,fileupload.name);
    return this.http.post(endpoint,formdata).pipe(map(i =>{return i}));
  }

  countblog(): Promise<any> {
    return this.http.get(`${environment.Base_URL}countblog`).toPromise();
  }

  countactive(): Promise<any> {
    return this.http.get(`${environment.Base_URL}countactive`).toPromise();
  }

  countfeature(): Promise<any> {
    return this.http.get(`${environment.Base_URL}countfeature`).toPromise();
  }

  




}
