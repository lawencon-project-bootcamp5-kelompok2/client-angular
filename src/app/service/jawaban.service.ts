import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Jawaban } from '../model/jawaban';

@Injectable({
  providedIn: 'root'
})
export class JawabanService {

  url = "http://726659f0.ngrok.io/jawaban";
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

  getJawabanById(idJawaban): Observable<any>{
    return this.http.get<any>(`${this.url}/search/${idJawaban}`, this.httpOptions);
  }

  getJawabanByTest(idTest): Observable<any[]>{
    return this.http.post<any>(`${this.url}/search/result`, idTest, this.httpOptions);
  }

  insertJawaban(jawaban): Observable<any>{
    return this.http.post<any>(`${this.url}/insert`, jawaban, this.httpOptions);
  }

  updateJawaban(jawaban): Observable<any>{
    return this.http.put<any>(`${this.url}/update`, jawaban, this.httpOptions);
  }

  deleteJawaban(idJawaban): Observable<any>{
    return this.http.delete<any>(`${this.url}/delete/${idJawaban}`, this.httpOptions);
  }
}
