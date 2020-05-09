import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Course } from '../model/course';
import { RekapJadwalKelas } from '../model/rekap-jadwal-kelas';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = "http://localhost:8080/course";
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

  updateCourse(course : Course) : Observable<string>{
    return this.http.put<any>(`${this.url}/update`, course, this.httpOptions);
  }

  deleteCourse(idCourse) : Observable<string>{
    return this.http.delete<any>(`${this.url}/delete/${idCourse}`, this.httpOptions);
  }

  rekapJadwalPerKelas(idCourse) : Observable<RekapJadwalKelas[]>{
    return this.http.get<RekapJadwalKelas[]>(`${this.url}/rekap/`+idCourse,this.httpOptions)
  }

}
