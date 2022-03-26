import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasFirebaseService {

  constructor(
    private asignaturaFirestore: AngularFirestore
  ) { }

  async createAsignatura(collection, dato): Promise<any> {
    try {
      return await this.asignaturaFirestore.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + JSON.stringify(err)); }
  }

  async getByIdAsignatura(collection, id): Promise<any> {
    try {
      return await this.asignaturaFirestore.collection(collection).doc(id).get();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async getAsignaturas(collection): Promise<any> {
    try {
      return await this.asignaturaFirestore.collection(collection).snapshotChanges();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async updateAsignatura(collection, id, dato): Promise<any> {
    try {
      return await this.asignaturaFirestore.collection(collection).doc(id).set(dato);
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async deleteAsignatura(collection, id): Promise<any> {
    try {
      return await this.asignaturaFirestore.collection(collection).doc(id).delete();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

}
