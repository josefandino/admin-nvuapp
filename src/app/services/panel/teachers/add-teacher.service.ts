import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddTeacherService {

  constructor(
    private addTacherFire: AngularFirestore
  ) { }

  async create(collection, dato) {
    try {
      return await this.addTacherFire.collection(collection).add(dato);
    } catch (err) { alert(JSON.stringify(err)); }
  }

  async getById(collection, id) {
    try {
      return await this.addTacherFire.collection(collection).doc(id).get();
    } catch (err) { alert(JSON.stringify(err)); }
  }

  async getAll(collection) {
    try {
      return await this.addTacherFire.collection(collection).snapshotChanges();
    } catch (err) { alert(JSON.stringify(err)); }
  }

}
