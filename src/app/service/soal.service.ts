import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoalService {

  url = "http://d250db20.ngrok.io/soal";
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

  uploadFile(formData){
    return this.http.post<any>(`${this.url}/uploadFile`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  downloadFile(id): Observable<Blob>{
    return this.http.get(`${this.url}/downloadFile/${id}`, {responseType: 'blob'});
  };
}
