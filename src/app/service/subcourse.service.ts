import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Subcourse } from '../model/subcourse';

@Injectable({
  providedIn: 'root'
})
export class SubcourseService {

  url = "http://localhost:8080/subcourse";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  getSubcourse(): Observable<Subcourse[]>{
    return this.http.get<any>(`${this.url}/list`);
  }

  getSubcourseById(id): Observable<Subcourse>{
    return this.http.get<any>(`${this.url}/search/${id}`);
  }

  getSubcourseByCourse(courseId): Observable<Subcourse[]>{
    return this.http.get<any>(`${this.url}/search/course/${courseId}`);
  }

  insertSubcourse(subcourse): Observable<Subcourse>{
    return this.http.post<any>(`${this.url}/insert`, subcourse);
  }

  updateSubcourse(subcourse): Observable<Subcourse>{
    return this.http.put<any>(`${this.url}/update`, subcourse);
  }

  deleteSubcourse(idSubcourse): Observable<Subcourse>{
    return this.http.delete<any>(`${this.url}/delete/${idSubcourse}`);
  }
}
