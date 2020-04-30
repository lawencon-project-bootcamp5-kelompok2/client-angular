import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { ForumAnswer } from '../model/forumAnswer';
import { Forum } from '../model/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumAnswerService {

  url = "http://caf62d24.ngrok.io/course";
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

  getAnswer(): Observable<ForumAnswer[]>{
    return this.http.get<any>(`${this.url}/list`, this.httpOptions);
  }

  answerSearch(forumAnswer): Observable<ForumAnswer>{
    return this.http.post<any>(`${this.url}/search`, forumAnswer, this.httpOptions);
  }

  getUpdate(forumAnswer): Observable<string>{
    return this.http.post<any>(`${this.url}/update`, forumAnswer, this.httpOptions);
  }

  getDelete(forumAnswer): Observable<string>{
    return this.http.post<any>(`${this.url}/delete`, forumAnswer, this.httpOptions);
  }
}
