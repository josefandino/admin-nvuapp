import { ListHomeI } from './../models/list-home';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListHomeService {

  private baseUrl = '../../assets/data/list-home.json';

  constructor(
    private http: HttpClient
  ) { }

  getListHome(): Observable<ListHomeI[]>{
    return this.http.get<ListHomeI[]>(`${this.baseUrl}`);
    }

}
