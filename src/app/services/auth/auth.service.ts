import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { UsersI } from './../../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: AngularFireAuth
  ) { }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logut() {
    return this.auth.signOut();
  }

  registerTeachers(data: UsersI) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

}
