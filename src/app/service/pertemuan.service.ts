import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pertemuan } from '../model/pertemuan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PertemuanService {

  url = "http://localhost:8080/pertemuan"
  constructor(private http: HttpClient) { }

  getPertemuan(): Observable<Pertemuan[]>{
    return this.http.get<any>(`${this.url}/list`);
  }

  getPertemuanById(idPertemuan): Observable<Pertemuan>{
    return this.http.get<any>(`${this.url}/search/${idPertemuan}`);
  }

  addPertemuan(pertemuan): Observable<string>{
    return this.http.post<any>(`${this.url}/insert`, pertemuan);
  }

  updatePertemuan(pertemuan): Observable<string>{
    return this.http.put<any>(`${this.url}/update`, pertemuan);
  }

  deletePertemuan(idPertemuan): Observable<string>{
    return this.http.delete<any>(`${this.url}/delete/${idPertemuan}`);
  }
}
