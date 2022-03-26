import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TeachersFireService {

  constructor(
    private tacherFireSvc: AngularFirestore
  ) { }

  async create(collection, dato): Promise<any> {
    try {
      return await this.tacherFireSvc.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + JSON.stringify(err)); }
  }

  async getByIdTeacher(collection, id): Promise<any> {
    try {
      return await this.tacherFireSvc.collection(collection).doc(id).get();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async getTeachers(collection): Promise<any> {
    try {
      return await this.tacherFireSvc.collection(collection).snapshotChanges();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async updateTeacher(collection, id, dato): Promise<any> {
    try {
      return await this.tacherFireSvc.collection(collection).doc(id).set(dato);
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async deleteTeacher(collection, id): Promise<any> {
    try {
      return await this.tacherFireSvc.collection(collection).doc(id).delete();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

}
