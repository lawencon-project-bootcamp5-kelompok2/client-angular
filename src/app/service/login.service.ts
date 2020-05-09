import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Login } from '../model/login';
import { TokenStorageService } from '../service/token-storage.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080/login";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json')
  .set('Authorization', 'Bearer '+sessionStorage.getItem('auth-token'));
  httpOptions = {
    headers: this.headers
  };

  isLoggedIn: boolean;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getLogin(): Observable<Login[]> {
    return this.http.get<any>(`${this.url}/show`, this.httpOptions);
  }

  getUsername(user): Observable<Login> {
    return this.http.get<any>(`${this.url}/show/username/${user}`, this.httpOptions);
  }

  insertLogin(login): Observable<any> {
    return this.http.post<any>(`${this.url}/insert`, login, this.httpOptions);
  }

  updateLogin(id, user, pass, role): Observable<any> {
    return this.http.post<any>(`${this.url}/update/${id}/${user}/${pass}/${role}`, this.httpOptions);
  }

  deleteLogin(id): Observable<any> {
    return this.http.post<any>(`${this.url}/delete/${id}`, this.httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post("http://localhost:8080/login/signup", user, this.httpOptions);
  }

  login(credentials): Observable<any> {
    this.isLoggedIn = true;
    return this.http.post("http://localhost:8080/login/signin",credentials, this.httpOptions);
  }

  isLogin(): boolean {
    if (this.tokenStorage.getToken()) {
      return true;
    } else {
      return false;
    }
  }

}
