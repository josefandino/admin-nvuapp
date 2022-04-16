import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CuerpoDocenteI } from 'src/app/models/cuerpo-docente';
import { InteractionService } from 'src/app/services/interaction.service';
import { CuerpoDocenteService } from 'src/app/services/panel/docentes/cuerpo-docente.service';

@Component({
  selector: 'app-create-docente',
  templateUrl: './create-docente.page.html',
  styleUrls: ['./create-docente.page.scss'],
})
export class CreateDocentePage implements OnInit {

  date = new Date().toLocaleDateString();
  hours = new Date().toLocaleTimeString();
  fechaFull = this.date + '-' + this.hours;

  dataDocente: CuerpoDocenteI = {
    uid: null,
    nameFull: null,
    document: null,
    age: null,
    countryOfResidence: null,
    homeCity: null,
    phone: null,
    email: null,
    password: null,
    address: null,
    designacion: null,
    dateEntry: null,
    avatar: null,
    usurname: null,
    codeDocente: null,
    note: null,
    dateCreated: this.fechaFull,
    profile: 'teacher'
  };

  docentesList = [];

  limit = 100;
  inputLimit = 100;
  contador = 0;

  constructor(
    private docentesFireSvc: CuerpoDocenteService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }

  backButton() { this.navCtrl.navigateBack('/dashboard'); }
  onKey(event){ this.contador = event.target.value.length; }

  async createDocente() {
    await this.interactionSvc.presentLoading('Agregando DOCENTE...');
    await this.docentesFireSvc.create('docentes', this.dataDocente)
      .then(async () => {
        await this.interactionSvc.closeLoading();
        return await this.navCtrl.navigateBack('/cuerpo-docente');
      }).catch((e) => alert((e)));
  }

}

