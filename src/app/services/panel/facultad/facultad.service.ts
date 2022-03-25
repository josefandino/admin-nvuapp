import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  constructor(
    private facultadFireSvc: AngularFirestore
  ) { }

  async create(collection, dato) {
    try {
      return await this.facultadFireSvc.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + JSON.stringify(err)); }
  }

  async getByIdFacultad(collection, id) {
    try {
      return await this.facultadFireSvc.collection(collection).doc(id).get();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async getFacultades(collection) {
    try {
      return await this.facultadFireSvc.collection(collection).snapshotChanges();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async updateFacultad(collection, id, dato) {
    try {
      return await this.facultadFireSvc.collection(collection).doc(id).set(dato);
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async deleteFacultad(collection, id) {
    try {
      return await this.facultadFireSvc.collection(collection).doc(id).delete();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }
}
