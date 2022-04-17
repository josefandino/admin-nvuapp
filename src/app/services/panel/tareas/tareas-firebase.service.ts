import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TareasFirebaseService {

  constructor(
    private tareaFireSvc: AngularFirestore
  ) { }

  async createTarea(collection, dato) {
    try {
      return await this.tareaFireSvc.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + JSON.stringify(err)); }
  }

  async getByIdTarea(collection, id) {
    try {
      return await this.tareaFireSvc.collection(collection).doc(id).get();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async getTareas(collection) {
    try {
      return await this.tareaFireSvc.collection(collection).snapshotChanges();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async updateTarea(collection, id, dato) {
    try {
      return await this.tareaFireSvc.collection(collection).doc(id).set(dato);
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async deleteTarea(collection, id) {
    try {
      return await this.tareaFireSvc.collection(collection).doc(id).delete();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }
}

