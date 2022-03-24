import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private studentFire: AngularFirestore
  ) { }

  async create(collection, dato) {
    try {
      return await this.studentFire.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + JSON.stringify(err)); }
  }

  async getById(collection, id) {
    try {
      return await this.studentFire.collection(collection).doc(id).get();
    } catch (err) { alert(JSON.stringify(err)); }
  }
  async getAll(collection) {
    try {
      return await this.studentFire.collection(collection).snapshotChanges();
    } catch (err) { alert(JSON.stringify(err)); }
  }

  async delete(collection, id) {
    try {
      return await this.studentFire.collection(collection).doc(id).delete();
    } catch (err) { alert(JSON.stringify(err)); }
  }

  async edit(collection, id, newStudent) {
    try {
      return await this.studentFire.collection(collection).doc(id).update(newStudent);
    } catch (err) { alert(JSON.stringify(err)); }
  }
  
}
