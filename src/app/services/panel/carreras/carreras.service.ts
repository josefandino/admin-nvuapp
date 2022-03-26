import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  constructor(
    private carreraFireSvc: AngularFirestore
  ) { }

  async createCarrea(collection, dato) {
    try {
      return await this.carreraFireSvc.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + JSON.stringify(err)); }
  }

  async getByIdCarrera(collection, id) {
    try {
      return await this.carreraFireSvc.collection(collection).doc(id).get();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async getCarreras(collection) {
    try {
      return await this.carreraFireSvc.collection(collection).snapshotChanges();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async updateCarrera(collection, id, dato) {
    try {
      return await this.carreraFireSvc.collection(collection).doc(id).set(dato);
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async deleteCarrera(collection, id) {
    try {
      return await this.carreraFireSvc.collection(collection).doc(id).delete();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }
}
