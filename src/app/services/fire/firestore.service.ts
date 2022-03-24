import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  createDoc(data: any, path: string, id: string) {

    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }

  getId() {
    return this.firestore.createId();
  }

  getCollection<T>(path: string) {
    const collection = this.firestore.collection<T>(path);
    return collection.valueChanges();
  }

  detDocument<T>(path: string, id: string) {
    return this.firestore.collection(path).doc<T>(id).valueChanges();
  }

  // ============================================>>>>>>>>>>
  createDocument() {
    this.firestore.collection('Students');
  }

  getColl() {
    console.log('Leyendo una collection');
    this.firestore.collection('Students').valueChanges()
      .subscribe((resp) => {
        console.log(resp);
      });
  }

}
