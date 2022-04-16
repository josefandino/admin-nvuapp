import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CicloAcademicoService {

  constructor(
    private cicloAdmicoFireSvc: AngularFirestore
  ) { }

  async createCicloAdmico(collection, dato) {
    try {
      return await this.cicloAdmicoFireSvc.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + (err)); }
  }

  async getByIdCicloAdmico(collection, id) {
    try {
      return await this.cicloAdmicoFireSvc.collection(collection).doc(id).get();
    } catch (err) { alert('ERROR en: ' + (err)); }
  }

  async getCicloAdmicos(collection) {
    try {
      return await this.cicloAdmicoFireSvc.collection(collection).snapshotChanges();
    } catch (err) { alert('ERROR en: ' + (err)); }
  }

  async updateCicloAdmico(collection, id, dato) {
    try {
      return await this.cicloAdmicoFireSvc.collection(collection).doc(id).set(dato);
    } catch (err) { alert('ERROR en: ' + (err)); }
  }

  async deleteCicloAdmico(collection, id) {
    try {
      return await this.cicloAdmicoFireSvc.collection(collection).doc(id).delete();
    } catch (err) { alert('ERROR en: ' + (err)); }
  }
}

