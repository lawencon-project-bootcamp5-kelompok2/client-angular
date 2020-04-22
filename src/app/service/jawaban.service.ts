import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Jawaban } from '../model/jawaban';

@Injectable({
  providedIn: 'root'
})
export class JawabanService {

  url = "http://c374350a.ngrok.io/course";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  getJawaban(): Observable<Jawaban[]>{
    return this.http.get<any>(`${this.url}/list`);
  }

  getJawabanById(jawaban): Observable<Jawaban>{
    return this.http.post<any>(`${this.url}/search`, jawaban);
  }

  insertJawaban(jawaban): Observable<Jawaban>{
    return this.http.post<any>(`${this.url}/insert`, jawaban);
  }

  updateJawaban(jawaban): Observable<Jawaban>{
    return this.http.post<any>(`${this.url}/update`, jawaban);
  }

  deleteJawaban(jawaban): Observable<Jawaban>{
    return this.http.post<any>(`${this.url}/delete`, jawaban);
  }
}
