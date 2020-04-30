import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Absensi } from '../model/absensi';
import { catchError, map } from 'rxjs/operators';
import { URL } from 'url';
import { Subcourse } from '../model/subcourse';

@Injectable({
  providedIn: 'root'
})
export class AbsensiService {
  url = "http://e9dd4911.ngrok.io/absensi";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json')
  .set('Authorization', 'Bearer '+sessionStorage.getItem('auth-token'));
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
    return this.http.get<Absensi[]>(`${this.url}/list`, this.httpOptions);
  }

  searchAbsen(idAbsen) : Observable<Absensi>{
    return this.http.get<Absensi>(`${this.url}/search/${idAbsen}`, this.httpOptions);
  }

  addAbsen(absen : Absensi) : Observable<string>{
    return this.http.post<any>(`${this.url}/insert`, absen, this.httpOptions);
  }

  updateAbsen(absen) : Observable<string>{
    return this.http.put<any>(`${this.url}/update`, absen, this.httpOptions);
  }

  getAbsenBySubcourse(idSubcourse, idTrainer): Observable<Subcourse> {
    return this.http.get<any>(`${this.url}/${idSubcourse}/${idTrainer}`, this.httpOptions);
  }
  
}
