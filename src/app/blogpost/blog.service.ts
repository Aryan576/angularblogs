import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }
  dispfeatured(): Promise<any> {
    return this.http.get(`${environment.Base_URL}getblogfeatured`).toPromise();
  }

  dispactive(): Promise<any> {
    return this.http.get(`${environment.Base_URL}getblogactive`).toPromise();
  }

  getblogByid(id: any): Promise<any> {
    return this.http.get(`${environment.Base_URL}getblogsByid/${id}`).toPromise();
  }

  updatefeature(model: any): Observable<any> {
    return this.http.put(`${environment.Base_URL}updatefeature`, model);
  }




}
