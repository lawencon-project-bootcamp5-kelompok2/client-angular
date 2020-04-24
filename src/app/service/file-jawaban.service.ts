import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileJawabanService {

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
