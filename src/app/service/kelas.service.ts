import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kelas } from '../model/kelas';

@Injectable({
  providedIn: 'root'
})
export class KelasService {

  url = "http://3fd71fe6.ngrok.io/kelas";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json')
  .set('Authorization', 'Bearer '+sessionStorage.getItem('auth-token'));
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  getKelas():Observable<Kelas[]>{
    return this.http.get<any>(`${this.url}/list`, this.httpOptions);
  }

  getKelasById(idKelas): Observable<Kelas>{
    return this.http.get<any>(`${this.url}/search/${idKelas}`, this.httpOptions);
  }

  insertKelas(kelas): Observable<Kelas>{
    return this.http.post<any>(`${this.url}/insert`, kelas, this.httpOptions);
  }

  updateKelas(kelas): Observable<Kelas>{
    return this.http.put<any>(`${this.url}/update`, kelas, this.httpOptions);
  }

  deleteKelas(kelas): Observable<Kelas>{
    return this.http.delete<any>(`${this.url}/delete`, this.httpOptions);
  }
}
