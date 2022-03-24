import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
;


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  async create(collection, dato) {
    try {
      return await this.firestore.collection(collection).add(dato);
    } catch (err) {
      alert(JSON.stringify(err));
    }
  }

  async getById(collection, id) {
    try {
      return await this.firestore.collection(collection).doc(id).get();
    } catch (err) {
      alert(JSON.stringify(err));
    }
  }

  async getAll(collection) {
    try {
      return await this.firestore.collection(collection).snapshotChanges();
    } catch (err) {
      alert(JSON.stringify(err));
    }
  }

  async update(collection, id, dato) {
    try {
      return await this.firestore.collection(collection).doc(id).set(dato);
    } catch (err) {
      alert(JSON.stringify(err));
    }
  }

  async delete(collection, id) {
    try {
      return await this.firestore.collection(collection).doc(id).delete();
    } catch (err) {
      alert(JSON.stringify(err));
    }
  }

}
