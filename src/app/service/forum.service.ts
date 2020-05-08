import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Forum } from '../model/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  url = "http://localhost:8080/forum";
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

  getForum(): Observable<Forum>{
    return this.http.get<any>(`${this.url}/list`, this.httpOptions);
  }

  getForumById(idForum): Observable<Forum>{
    return this.http.get<any>(`${this.url}/search/${idForum}`, this.httpOptions);
  }

  getForumByPertemuan(idPertemuan): Observable<Forum[]>{
    return this.http.get<any>(`${this.url}/search/pertemuan/${idPertemuan}`, this.httpOptions)
  }

  postForum(forum): Observable<string>{
    return this.http.post<any>(`${this.url}/create`, forum, this.httpOptions);
  }

  updateForum(forum): Observable<string>{
    return this.http.post<any>(`${this.url}/update`, forum, this.httpOptions);
  }

  deleteForum(forum): Observable<string>{
    return this.http.post<any>(`${this.url}/delete`, forum, this.httpOptions);
  }
}
