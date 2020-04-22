import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Forum } from '../model/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

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

  getForum(): Observable<Forum>{
    return this.http.get<any>(`${this.url}/list`);
  }

  searchForum(forum): Observable<Forum>{
    return this.http.post<any>(`${this.url}/search`, forum);
  }

  postForum(forum): Observable<Forum>{
    return this.http.post<any>(`${this.url}/create`, forum);
  }

  updateForum(forum): Observable<Forum>{
    return this.http.post<any>(`${this.url}/update`, forum);
  }

  deleteForum(forum): Observable<Forum>{
    return this.http.post<any>(`${this.url}/delete`, forum);
  }
}
