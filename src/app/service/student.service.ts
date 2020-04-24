import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "http://localhost:8080/student";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<any>(`${this.url}/list`);
  }

  getStudentById(id): Observable<Student>{
    return this.http.get<any>(`${this.url}/search/${id}`);
  }

  insertStudent(student): Observable<Student>{
    return this.http.post<any>(`${this.url}/insert`, student);
  }

  updateStudent(student): Observable<Student>{
    return this.http.put<any>(`${this.url}/update`, student);
  }

  deleteStudent(student): Observable<Student>{
    return this.http.post<any>(`${this.url}/delete`, student);
  }

  reportStudent(idStudent, idCourse): Observable<Student>{
    return this.http.get<any>(`${this.url}/${idStudent}/${idCourse}`);
  }
}
