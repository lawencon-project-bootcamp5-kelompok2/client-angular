import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Subcourse } from '../model/subcourse';

@Injectable({
  providedIn: 'root'
})
export class SubcourseService {

  url = "http://c374350a.ngrok.io/subcourse";
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
    return this.http.post<any>(`${this.url}/search`, id);
  }

  getSubcourseByCourse(subcourse): Observable<Subcourse>{
    return this.http.post<any>(`${this.url}/search/course`, subcourse);
  }

  insertSubcourse(subcourse): Observable<Subcourse>{
    return this.http.post<any>(`${this.url}/insert`, subcourse);
  }

  updateSubcourse(subcourse): Observable<Subcourse>{
    return this.http.post<any>(`${this.url}/update`, subcourse);
  }

  deleteSubcourse(subcourse): Observable<Subcourse>{
    return this.http.post<any>(`${this.url}/delete`, subcourse);
  }
}
