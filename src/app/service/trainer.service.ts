import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Trainer } from '../model/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  url = "http://3fd71fe6.ngrok.io/trainer";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json').set('Authorization', 'Bearer '+sessionStorage.getItem('auth-token'));
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
    return this.http.post<any>(`${this.url}/search`, id, this.httpOptions);
  }

  insertTrainer(trainer): Observable<Trainer>{
    return this.http.post<any>(`${this.url}/insert`, trainer, this.httpOptions);
  }

  updateTrainer(trainer): Observable<Trainer>{
    return this.http.post<any>(`${this.url}/update`, trainer, this.httpOptions);
  }

  deleteTrainer(id) {
    return this.http.delete(this.url+'/delete/'+id,this.httpOptions)
  }

  reportTrainer(idTrainer, idSubcourse): Observable<Trainer>{
    return this.http.get<any>(`${this.url}/${idTrainer}/${idSubcourse}`, this.httpOptions);
  }
}
