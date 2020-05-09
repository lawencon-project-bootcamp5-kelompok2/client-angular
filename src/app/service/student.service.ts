import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "http://9ece3500.ngrok.io/student";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json').set('Authorization', 'Bearer '+sessionStorage.getItem('auth-token'));
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<any>(`${this.url}/list`, this.httpOptions);
  }

  getStudentById(id): Observable<Student>{
    return this.http.get<any>(`${this.url}/search/${id}`, this.httpOptions);
  }

  getStudentByEmail(email): Observable<Student>{
    return this.http.get<any>(`${this.url}/search/email/${email}`, this.httpOptions);
  }

  insertStudent(student): Observable<any>{
    return this.http.post<any>(`${this.url}/insert`, student, this.httpOptions);
  }

  updateStudent(student): Observable<any>{
    return this.http.put<any>(`${this.url}/update`, student, this.httpOptions);
  }

  deleteStudent(student): Observable<any>{
    return this.http.post<any>(`${this.url}/delete`, student, this.httpOptions);
  }

  reportStudent(idStudent, idKelas, idCourse): Observable<any>{
    return this.http.get<any>(`${this.url}/report/${idStudent}/${idKelas}/${idCourse}`, 
    { headers: this.httpOptions.headers, responseType: 'arraybuffer' as 'json'} );
  }
}
