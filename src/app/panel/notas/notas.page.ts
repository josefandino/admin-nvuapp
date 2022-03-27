import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { InteractionService } from './../../services/interaction.service';
import { NotasFireService } from './../../services/panel/notas/notas-fire.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  credentials = {
    email: 'jose@hotmail.com',
    password: '123456'
  };

  notasList = [];

  constructor(
    private notaFireSvc: NotasFireService,
    public interactionSvc: InteractionService,
    private navCtrl: NavController
  ) { }


  ngOnInit() {
    this.notaFireSvc.getAll('notas').then(fireResp => {
      fireResp.subscribe(listUsersRef => {
        this.notasList = listUsersRef.map(notasRef => {
          const nota: any = notasRef.payload.doc.data();
          nota['id'] = notasRef.payload.doc.id;
          return nota;
        });
        console.log(this.notasList);
      });
    });
  }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

  createNota() {
    this.notaFireSvc.create('notas', this.credentials)
      .then(async resp => {
        await this.interactionSvc.presentLoading('Ingresandoo...');
        await this.interactionSvc.closeLoading();
        console.log('Resp- ', resp);
        // alert(JSON.stringify(resp));
      }).catch((e) => alert(JSON.stringify(e)));
  }

  updateUser(id, dato) {
    this.notaFireSvc.update('notas', id, dato);
  }

  obtenerPorId(id) {
    this.notaFireSvc.getById('notas', id).then(res => {
      res.subscribe(docRef => {
        const nota = docRef.data();
        nota['id'] = docRef.id;
        console.log(nota);
      });
    });
  }

}
