import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MateriService {

  url = "http://c374350a.ngrok.io/materi";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  uploadFile(uploadMateri: File): Observable<boolean>{
    const formData: FormData = new FormData();
    formData.append('file', uploadMateri, uploadMateri.name);
    return this.http.post(`${this.url}/uploadFile`, formData).pipe(
     map(() => { return true})
    );
  }

  downloadFile(id): Observable<Blob>{
    return this.http.get(`${this.url}/downloadFile/${id}`, {responseType: 'blob'});
  };
}
