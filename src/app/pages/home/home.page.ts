import { FirestoreService } from './../../services/fire/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ListHomeI } from './../../models/list-home';
import { InteractionService } from './../../services/interaction.service';
import { ListHomeService } from './../../services/list-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listHome = [
    {
      path: '/register',
      name: 'Registrarme',
      icon: 'arrow-redo-outline'
    },
    {
      path: '/login',
      name: 'Ingresar',
      icon: 'arrow-redo-outline'
    },
    {
      path: '/admision',
      name: 'Admision',
      icon: 'arrow-redo-outline'
    }
  ];

  constructor(
    private listHomeSvc: ListHomeService,
    private firestore: FirestoreService,
    public interactionSvc: InteractionService
  ) {
  }

  ngOnInit() { }

  async getStudents() {
    await this.interactionSvc.presentLoading('Buscando usuarios...');
    await this.firestore.getColl();
    await this.interactionSvc.closeLoading();
    await this.interactionSvc.presentToast('usuarios encontrados exitosamente', 2000, 'primary');
  }

  saveStudent() {
    const path = 'Students';
    // const id = resp.user.uid;
    // this.data.uid = id;
    // this.firestore.createDoc()
    // return
  }

}
