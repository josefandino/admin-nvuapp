import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProfileI } from './../../models/panel/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public baseUrl = '../../../assets/data/profile.json';

  constructor(
    private http: HttpClient
  ) { }

  getDataUrl(): Observable<ProfileI> {
    return this.http.get<ProfileI>(`${this.baseUrl}`);
  }

}
