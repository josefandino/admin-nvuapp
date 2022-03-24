import { MenuI } from './../../models/menu';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private urlMenu = '../../../assets/data/menu.json';

  constructor(
    private http: HttpClient
  ) { }

  getMenu(): Observable<MenuI> {
    return this.http.get<MenuI>(this.urlMenu);
  }
}
