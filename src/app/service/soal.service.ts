import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Soal } from '../model/soal';

@Injectable({
  providedIn: 'root'
})
export class SoalService {

  url = "http://726659f0.ngrok.io/soal";
  headers = new HttpHeaders().set('Accept', 'application/json')
  .set('Authorization', 'Bearer '+sessionStorage.getItem('auth-token'));
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  uploadFile(uploadSoal: File) : Observable<Soal>{
    const formData: FormData = new FormData();
    formData.append('file', uploadSoal, uploadSoal.name);
    return this.http.post<any>(`${this.url}/uploadFile`, formData, this.httpOptions);
  }

  downloadFile(id): Observable<Blob>{
    return this.http.get(`${this.url}/downloadFile/${id}`, {headers: this.headers, responseType: 'blob'});
  };
}
