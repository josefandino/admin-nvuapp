import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  constructor(
    private courseFireSvc: AngularFirestore
  ) { }

  async create(collection, dato) {
    try {
      return await this.courseFireSvc.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + JSON.stringify(err)); }
  }

  async getByIdCourse(collection, id) {
    try {
      return await this.courseFireSvc.collection(collection).doc(id).get();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async getCourses(collection) {
    try {
      return await this.courseFireSvc.collection(collection).snapshotChanges();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async updateCourse(collection, id, dato) {
    try {
      return await this.courseFireSvc.collection(collection).doc(id).set(dato);
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async deleteCourse(collection, id) {
    try {
      return await this.courseFireSvc.collection(collection).doc(id).delete();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }
}
