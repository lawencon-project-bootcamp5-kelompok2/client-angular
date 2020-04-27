import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Login } from '../model/login';
import { TokenStorageService } from '../service/token-storage.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://c374350a.ngrok.io/course";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json');
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
    return this.http.get<any>(`${this.url}/show`);
  }

  getUsername(user): Observable<Login> {
    return this.http.get<any>(`${this.url}/show/username/${user}`);
  }

  insertLogin(login): Observable<Login> {
    return this.http.post<any>(`${this.url}/insert`, login);
  }

  updateLogin(id, user, pass, role): Observable<Login> {
    return this.http.post<any>(`${this.url}/update/${id}/${user}/${pass}/${role}`, this.httpOptions);
  }

  deleteLogin(id): Observable<Login> {
    return this.http.post<any>(`${this.url}/delete/${id}`, this.httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post("http://localhost:8080/login/signup", {
      nama: user.nama,
      email: user.email,
      password: user.password
    }, this.httpOptions);
  }

  login(credentials): Observable<any> {
    this.isLoggedIn = true;
    return this.http.post("http://localhost:8080/login/signin", {
      email: credentials.email,
      password: credentials.password
    }, this.httpOptions);
  }

  isLogin(): boolean {
    if (this.tokenStorage.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  getStudentBoard(): Observable<any> {
    return this.http.get("http://localhost:8080/api/test/student", { responseType: 'text' });
  }
}
