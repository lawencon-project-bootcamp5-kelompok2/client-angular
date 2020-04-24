import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Absensi } from '../model/absensi';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbsensiService {
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

  getAbsen() : Observable<Absensi[]>{
    return this.http.get<Absensi[]>(`${this.url}/list`);
  }

  addAbsen(absen : Absensi) : Observable<Absensi>{
    return this.http.post<Absensi>(`${this.url}/insert`, absen, this.httpOptions).pipe(
      map(() => absen), catchError(this.handleError)
    );
  }

  searchAbsen(absen : Absensi) : Observable<Absensi>{
    return this.http.post<Absensi>(`${this.url}/search`, absen);
  }
}
