import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { error } from 'protractor';
import { Materi } from '../model/materi';

@Injectable({
  providedIn: 'root'
})
export class MateriService {

  url = "http://localhost:8080/materi";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  uploadFile(uploadMateri: File): Observable<Materi>{
    const formData: FormData = new FormData();
    formData.append('file', uploadMateri, uploadMateri.name);
    return this.http.post<Materi>(`${this.url}/uploadFile`, formData).pipe(
    //  map(() => { return true})
    );
  }

  downloadFile(id): Observable<Blob>{
    return this.http.get(`${this.url}/downloadFile/${id}`, {responseType: 'blob'});
  };
}
