import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

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

  addCourse(course : Course) : Observable<Course>{
    const url = `$(this.url)/$(insert)`;
    return this.http.post<Course>(url, course, this.httpOptions).pipe(
      map (() => course), catchError(this.handleError)
    );
  }

  getCourse() : Observable<Course[]>{
    return this.http.get<Course[]>(`${this.url}/list`);
  }

}
