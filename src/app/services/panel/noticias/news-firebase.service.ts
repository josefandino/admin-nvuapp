import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewsFirebaseService {

  constructor(
    private newsFireSvc: AngularFirestore
  ) { }

  async createNoticia(collection, dato): Promise<any>  {
    try {
      return await this.newsFireSvc.collection(collection).add(dato);
    } catch (err) { alert('ERROR en : ' + JSON.stringify(err)); }
  }

  async getByIdNoticia(collection, id): Promise<any>  {
    try {
      return await this.newsFireSvc.collection(collection).doc(id).get();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async getNoticias(collection): Promise<any> {
    try {
      return await this.newsFireSvc.collection(collection).snapshotChanges();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async updateNoticia(collection, id, dato): Promise<any>  {
    try {
      return await this.newsFireSvc.collection(collection).doc(id).set(dato);
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

  async deleteNoticia(collection, id): Promise<any>  {
    try {
      return await this.newsFireSvc.collection(collection).doc(id).delete();
    } catch (err) { alert('ERROR en: ' + JSON.stringify(err)); }
  }

}

