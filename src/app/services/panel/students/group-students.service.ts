import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GroupStudentsService {

  constructor(
    private studentFire: AngularFirestore
  ) { }

  async createGroupStudent(collection, dato) {
    try {
      return await this.studentFire.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + JSON.stringify(err)); }
  }

  async getByIdGroupStudent(collection, id) {
    try {
      return await this.studentFire.collection(collection).doc(id).get();
    } catch (err) { alert(JSON.stringify(err)); }
  }
  async getAllGroupStudents(collection) {
    try {
      return await this.studentFire.collection(collection).snapshotChanges();
    } catch (err) { alert(JSON.stringify(err)); }
  }

  async updateGroupStudent(collection, id, dato) {
    try {
      return await this.studentFire.collection(collection).doc(id).set(dato);
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async deleteGroupStudent(collection, id) {
    try {
      return await this.studentFire.collection(collection).doc(id).delete();
    } catch (err) { alert(JSON.stringify(err)); }
  }

  async editGroupStudent(collection, id, newStudent) {
    try {
      return await this.studentFire.collection(collection).doc(id).update(newStudent);
    } catch (err) { alert(JSON.stringify(err)); }
  }

}
