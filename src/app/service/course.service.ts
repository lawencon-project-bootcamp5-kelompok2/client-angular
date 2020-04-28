import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = "http://3fd71fe6.ngrok.io/course";
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

  addCourse(course : Course) : Observable<Course>{
    return this.http.post<Course>(`${this.url}/insert`, course, this.httpOptions);
  }

  getCourse() : Observable<Course[]>{
    return this.http.get<Course[]>(`${this.url}/list`, this.httpOptions);
  }

  getCourseById(id): Observable<Course>{
    return this.http.get<Course>(`${this.url}/search/${id}`, this.httpOptions);
  }

}
