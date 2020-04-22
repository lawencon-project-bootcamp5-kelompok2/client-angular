import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://9f1eb94c.ngrok.io/course";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  getLogin(): Observable<Login[]>{
    return this.http.get<any>(`${this.url}/show`);
  }

  getUsername(user): Observable<Login>{
    return this.http.get<any>(`${this.url}/show/username/${user}`);
  }

  insertLogin(login): Observable<Login>{
    return this.http.post<any>(`${this.url}/insert`, login);
  }

  updateLogin(id, user, pass, role): Observable<Login>{
    return this.http.post<any>(`${this.url}/update/${id}/${user}/${pass}/${role}`, this.httpOptions);
  }

  deleteLogin(id): Observable<Login>{
    return this.http.post<any>(`${this.url}/delete/${id}`, this.httpOptions);
  }
}
