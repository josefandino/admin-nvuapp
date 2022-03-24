import { CursosI } from './../../models/panel/mis-cursos';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MisCursosService {

  baseURL = '../../../assets/data/mis-cursos.json';

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<CursosI>{
    return this.http.get<CursosI>(`${this.baseURL}`);
  }

}
