import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Test } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = "http://3fd71fe6.ngrok.io/test";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json').set('Authorization', 'Bearer '+sessionStorage.getItem('auth-token'));
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  getTest(): Observable<Test[]>{
    return this.http.get<any>(`${this.url}/list`, this.httpOptions);
  }

  getTestById(id): Observable<Test>{
    return this.http.post<any>(`${this.url}/search`, id, this.httpOptions);
  }

  insertTest(test): Observable<Test>{
    return this.http.post<any>(`${this.url}/insert`, test, this.httpOptions);
  }

  updateTest(test): Observable<Test>{
    return this.http.post<any>(`${this.url}/update`, test, this.httpOptions);
  }

  deleteTest(test): Observable<Test>{
    return this.http.post<any>(`${this.url}/delete`, test, this.httpOptions);
  }
}
