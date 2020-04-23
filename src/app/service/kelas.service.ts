import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kelas } from '../model/kelas';

@Injectable({
  providedIn: 'root'
})
export class KelasService {

  url = "http://localhost:8080/kelas";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  getKelas():Observable<Kelas[]>{
    return this.http.get<any>(`${this.url}/list`);
  }

  getKelasById(kelas): Observable<Kelas>{
    return this.http.post<any>(`${this.url}/search`, kelas);
  }

  insertKelas(kelas): Observable<Kelas>{
    return this.http.post<any>(`${this.url}/insert`, kelas);
  }

  updateKelas(kelas): Observable<Kelas>{
    return this.http.post<any>(`${this.url}/update`, kelas);
  }

  deleteKelas(kelas): Observable<Kelas>{
    return this.http.post<any>(`${this.url}/delete`, kelas);
  }
}
