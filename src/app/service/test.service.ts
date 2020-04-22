import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Test } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

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

  getTest(): Observable<Test[]>{
    return this.http.get<any>(`${this.url}/list`);
  }

  getTestById(id): Observable<Test>{
    return this.http.post<any>(`${this.url}/search`, id);
  }

  insertTest(test): Observable<Test>{
    return this.http.post<any>(`${this.url}/insert`, test);
  }

  updateTest(test): Observable<Test>{
    return this.http.post<any>(`${this.url}/update`, test);
  }

  deleteTest(test): Observable<Test>{
    return this.http.post<any>(`${this.url}/delete`, test);
  }
}
