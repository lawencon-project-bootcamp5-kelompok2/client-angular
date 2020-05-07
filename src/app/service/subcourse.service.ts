import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Subcourse } from '../model/subcourse';

@Injectable({
  providedIn: 'root'
})
export class SubcourseService {

  url = "http://9e4065a7.ngrok.io/subcourse";
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
    return this.http.get<any>(`${this.url}/search/course/`+courseId, this.httpOptions);
  }

  getSubcourseByKelas(idKelas): Observable<Subcourse[]>{
    return this.http.get<any>(`${this.url}/search/kelas/`+idKelas, this.httpOptions);
  }

  getNilai(idSubcourse, idKelas): Observable<any>{
    return this.http.get<any>(`${this.url}/nilai/${idSubcourse}/${idKelas}`, this.httpOptions);
  }

  getInputNilai(idSubcourse, idKelas): Observable<any>{
    return this.http.get<any>(`${this.url}/inputnilai/${idSubcourse}/${idKelas}`, this.httpOptions);
  }

  insertSubcourse(subcourse): Observable<string>{
    return this.http.post<string>(`${this.url}/insert`, subcourse, this.httpOptions);
  }

  updateSubcourse(subcourse): Observable<any>{
    return this.http.put<any>(`${this.url}/update`, subcourse, this.httpOptions);
  }

  deleteSubcourse(idSubcourse): Observable<any>{
    return this.http.delete<any>(`${this.url}/delete/${idSubcourse}`, this.httpOptions);
  }
}
