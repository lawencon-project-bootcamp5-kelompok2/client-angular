import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pertemuan } from '../model/pertemuan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PertemuanService {

  url = "http://726659f0.ngrok.io/pertemuan";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json')
  .set('Authorization', 'Bearer '+sessionStorage.getItem('auth-token'));
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  getPertemuan(): Observable<Pertemuan[]>{
    return this.http.get<any>(`${this.url}/list`, this.httpOptions);
  }

  getPertemuanById(idPertemuan): Observable<Pertemuan>{
    return this.http.get<any>(`${this.url}/search/${idPertemuan}`, this.httpOptions);
  }

  getPertemuanBySubcourse(idSubcourse): Observable<Pertemuan[]>{
    return this.http.get<any>(`${this.url}/search/pertemuan/${idSubcourse}`, this.httpOptions);
  }

  addPertemuan(pertemuan): Observable<string>{
    return this.http.post<any>(`${this.url}/insert`, pertemuan, this.httpOptions);
  }

  updatePertemuan(pertemuan): Observable<string>{
    return this.http.put<any>(`${this.url}/update`, pertemuan, this.httpOptions);
  }

  deletePertemuan(idPertemuan): Observable<string>{
    return this.http.delete<any>(`${this.url}/delete/${idPertemuan}`, this.httpOptions);
  }
}
