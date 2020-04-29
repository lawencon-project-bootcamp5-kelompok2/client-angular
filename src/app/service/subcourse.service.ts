import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Subcourse } from '../model/subcourse';

@Injectable({
  providedIn: 'root'
})
export class SubcourseService {

  url = "http://d250db20.ngrok.io/subcourse";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json').set('Authorization', 'Bearer '+sessionStorage.getItem('auth-token'));
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  getSubcourse(): Observable<Subcourse[]>{
    return this.http.get<any>(`${this.url}/list`, this.httpOptions);
  }

  getSubcourseById(id): Observable<Subcourse>{
    return this.http.get<any>(`${this.url}/search/${id}`, this.httpOptions);
  }

  getSubcourseByCourse(courseId): Observable<Subcourse[]>{
    return this.http.get<any>(`${this.url}/search/course/${courseId}`, this.httpOptions);
  }

  insertSubcourse(subcourse): Observable<any>{
    return this.http.post<any>(`${this.url}/insert`, subcourse, this.httpOptions);
  }

  updateSubcourse(subcourse): Observable<any>{
    return this.http.put<any>(`${this.url}/update`, subcourse, this.httpOptions);
  }

  deleteSubcourse(idSubcourse): Observable<any>{
    return this.http.delete<any>(`${this.url}/delete/${idSubcourse}`, this.httpOptions);
  }
}
