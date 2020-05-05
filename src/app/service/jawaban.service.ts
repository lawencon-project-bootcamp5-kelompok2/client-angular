import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Jawaban } from '../model/jawaban';

@Injectable({
  providedIn: 'root'
})
export class JawabanService {

  url = "http://da7223e8.ngrok.io/course";
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

  getJawaban(): Observable<Jawaban[]>{
    return this.http.get<any>(`${this.url}/list`, this.httpOptions);
  }

  getJawabanById(jawaban): Observable<Jawaban>{
    return this.http.post<any>(`${this.url}/search`, jawaban, this.httpOptions);
  }

  insertJawaban(jawaban): Observable<string>{
    return this.http.post<any>(`${this.url}/insert`, jawaban, this.httpOptions);
  }

  updateJawaban(jawaban): Observable<string>{
    return this.http.post<any>(`${this.url}/update`, jawaban, this.httpOptions);
  }

  deleteJawaban(jawaban): Observable<string>{
    return this.http.post<any>(`${this.url}/delete`, jawaban, this.httpOptions);
  }
}
