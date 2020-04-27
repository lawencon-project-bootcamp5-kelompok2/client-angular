import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Absensi } from '../model/absensi';
import { catchError, map } from 'rxjs/operators';
import { URL } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AbsensiService {
  url = "http://localhost:8080/absensi";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) {
  }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  getAbsen() : Observable<Absensi[]>{
    return this.http.get<Absensi[]>(`${this.url}/list`);
  }

  searchAbsen(idAbsen) : Observable<Absensi>{
    return this.http.get<Absensi>(`${this.url}/search/${idAbsen}`);
  }

  addAbsen(absen : Absensi) : Observable<Absensi>{
    return this.http.post<Absensi>(`${this.url}/insert`, absen, this.httpOptions).pipe(
      map(() => absen), catchError(this.handleError)
    );
  }

  updateAbsen(absen) : Observable<Absensi>{
    return this.http.put<any>(`${this.url}/update`, absen);
  }

  getAbsenBySubcourse(idSubcourse, idTrainer): Observable<string> {
    return this.http.get<any>(`${this.url}/${idSubcourse}/${idTrainer}`);
  }
  
}
