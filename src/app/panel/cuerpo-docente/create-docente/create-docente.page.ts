/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CuerpoDocenteI } from 'src/app/models/cuerpo-docente';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { CuerpoDocenteService } from 'src/app/services/panel/docentes/cuerpo-docente.service';

@Component({
  selector: 'app-create-docente',
  templateUrl: './create-docente.page.html',
  styleUrls: ['./create-docente.page.scss'],
})
export class CreateDocentePage implements OnInit {

  date = new Date().toLocaleDateString('sv-SE');
  hours = new Date().toLocaleTimeString();
  year = new Date().getFullYear();
  mes = new Date().getMonth();
  dia = new Date().getDay();
  fechaFull = new Date().toLocaleString('sv-SE');
  fecha = new Date().toLocaleDateString('sv-SE');
  timestamp: any = new Date().getTime();

  dataDocente: CuerpoDocenteI = {
    uid: null,
    teacherId: null,
    nameFull: null,
    document: null,
    dob: null,
    sex: null,
    countryOfResidence: null,
    homeCity: null,
    address: null,
    designacion: null,
    phone: null,
    email: null,
    dateEntry: null,
    avatar: null,
    usurname: null,
    codeDocente: null,
    password: null,
    note: null,
    designation: null,
    photo: null,
    usertypeID: null,
    create_date: this.fechaFull,
    modify_date: this.fechaFull,
    create_userID: this.fechaFull,
    create_username: this.fechaFull,
    create_usertype: this.fechaFull,
    active: false,
    dateCreated: this.fechaFull,
    profile: 'teacher',
  };

  docentesList = [];
  countrieslist: any = [];

  limit = 100;
  inputLimit = 100;
  contador = 0;

  constructor(
    private docentesFireSvc: CuerpoDocenteService,
    private interactionSvc: InteractionService,
    private countriesSvc: CountriesService,
    private navCtrl: NavController,
  ) {
    this.paisesData();
  }

  ngOnInit() { }

  backButton() { this.navCtrl.navigateBack('/dashboard'); }
  onKey(event) { this.contador = event.target.value.length; }

  paises(e: CustomEvent) {
    const data = e.detail.value;
    this.dataDocente.countryOfResidence = data;
    console.log(this.dataDocente.countryOfResidence);
  }

  async paisesData() {
    const countires = await this.countriesSvc.paises();
    this.countrieslist = countires;
    return;
  }

  async createDocente() {
    await this.interactionSvc.presentLoading('Agregando DOCENTE...');
    await this.docentesFireSvc.create('docentes', this.dataDocente)
      .then(async () => {
        await this.interactionSvc.closeLoading();
        return await this.navCtrl.navigateBack('/cuerpo-docente');
      }).catch((e) => alert((e)));
  }

}

