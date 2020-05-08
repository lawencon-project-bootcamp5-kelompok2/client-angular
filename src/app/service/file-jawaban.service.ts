import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileJawabanService {

  url = "http://9ece3500.ngrok.io/fileJawaban";
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

  uploadFile(uploadJawaban: File){
    const formData: FormData = new FormData();
    formData.append('file', uploadJawaban, uploadJawaban.name);
    return this.http.post<any>(`${this.url}/uploadFile`, formData, this.httpOptions);
  }

  downloadFile(id): Observable<Blob>{
    return this.http.get(`${this.url}/downloadFile/${id}`, {headers : this.headers, responseType: 'blob'});
  };
}
