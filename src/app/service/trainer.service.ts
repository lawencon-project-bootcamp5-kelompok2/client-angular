import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Trainer } from '../model/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  url = "http://da7223e8.ngrok.io/trainer";
  headers = new HttpHeaders().set('Content-type', 'application/json').
    set('Accept', 'application/json').set('Authorization', 'Bearer '+sessionStorage.getItem('auth-token'));
  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) { }
  
  private handleError(error: any){
    console.log(error);
    return throwError(error);    
  }

  getTrainer() : Observable<Trainer[]>{
    return this.http.get<Trainer[]>(`${this.url}/list`, this.httpOptions);
  }

  getTrainerById(id): Observable<Trainer>{
    return this.http.get<any>(`${this.url}/search/`+id, this.httpOptions);
  }

  getTrainerByEmail(email): Observable<Trainer>{
    return this.http.get<any>(`${this.url}/search/email/${email}`, this.httpOptions);
  }

  insertTrainer(trainer): Observable<any>{
    return this.http.post<any>(`${this.url}/insert`, trainer, this.httpOptions);
  }

  updateTrainer(trainer): Observable<any>{
    return this.http.put<any>(`${this.url}/update`, trainer, this.httpOptions);
  }

  deleteTrainer(id) {
    return this.http.delete(this.url+'/delete/'+id,this.httpOptions)
  }

  reportTrainer(idTrainer, idSubcourse): Observable<any>{
    return this.http.get<any>(`${this.url}/report/${idTrainer}/${idSubcourse}`, this.httpOptions);
  }

  searchData(search) : Observable<Trainer[]>{
    return this.http.get<Trainer[]>(`${this.url}/search-keyword/`+search, this.httpOptions)
  }
}
