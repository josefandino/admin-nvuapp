import { Component, OnInit } from '@angular/core';

import { AdmisionI } from './../../models/admision';
import { AdmisionService } from './../../services/pages/admision.service';
import { InteractionService } from './../../services/interaction.service';

@Component({
  selector: 'app-admision',
  templateUrl: './admision.page.html',
  styleUrls: ['./admision.page.scss'],
})
export class AdmisionPage implements OnInit {

  dataAdn: AdmisionI = {
    uid: null,
    name: null,
    lastname: null,
    document: null,
    email: null,
    phone: null,
    country: null,
    city: null,
    carrera: null,
    optsContactado: null,
    information: null,
    politik: null,
    admitido: false
  };

  constructor(
    private admisionSvc: AdmisionService,
    private interactionSvc: InteractionService
  ) { }

  ngOnInit() {  }

  createAdmision() {
    this.admisionSvc.create('admision', this.dataAdn)
      .then(async resp => {
        await this.interactionSvc.presentLoading('Agregando información...');
        console.log('Resp- ', resp);
        await this.interactionSvc.closeLoading();
      }).catch((e) => alert(JSON.stringify(e)));
  }

  // isModelIsvalid() {
  // }

}
