import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlanEstudiosFirebaseService {

  constructor(
    private sectionFireSvc: AngularFirestore
  ) { }

  async createPlanEstudio(collection, dato) {
    try {
      return await this.sectionFireSvc.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + JSON.stringify(err)); }
  }

  async getByIdPlanEstudio(collection, id) {
    try {
      return await this.sectionFireSvc.collection(collection).doc(id).get();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async getPlanEstudio(collection) {
    try {
      return await this.sectionFireSvc.collection(collection).snapshotChanges();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async updatePlanEstudio(collection, id, dato) {
    try {
      return await this.sectionFireSvc.collection(collection).doc(id).set(dato);
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async deletePlanEstudio(collection, id) {
    try {
      return await this.sectionFireSvc.collection(collection).doc(id).delete();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }
}

