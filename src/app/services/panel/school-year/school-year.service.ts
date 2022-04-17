import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SchoolYearService {
  constructor(
    private schoolYearFireSvc: AngularFirestore
  ) { }

  async createSchoolYearn(collection, dato) {
    try {
      return await this.schoolYearFireSvc.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + JSON.stringify(err)); }
  }

  async getByIdSchoolYearn(collection, id) {
    try {
      return await this.schoolYearFireSvc.collection(collection).doc(id).get();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async getSchoolYearns(collection) {
    try {
      return await this.schoolYearFireSvc.collection(collection).snapshotChanges();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async updateSchoolYearn(collection, id, dato) {
    try {
      return await this.schoolYearFireSvc.collection(collection).doc(id).set(dato);
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async deleteSchoolYearn(collection, id) {
    try {
      return await this.schoolYearFireSvc.collection(collection).doc(id).delete();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }
}


