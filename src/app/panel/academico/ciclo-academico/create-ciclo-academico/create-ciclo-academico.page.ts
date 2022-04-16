/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CicloAcademicoI } from 'src/app/models/panel/ciclo-academico';
import { InteractionService } from 'src/app/services/interaction.service';
import { CarrerasService } from 'src/app/services/panel/carreras/carreras.service';
import { CicloAcademicoService } from 'src/app/services/panel/ciclo-academico/ciclo-academico.service';

@Component({
  selector: 'app-create-ciclo-academico',
  templateUrl: './create-ciclo-academico.page.html',
  styleUrls: ['./create-ciclo-academico.page.scss'],
})
export class CreateCicloAcademicoPage implements OnInit {

  date = new Date().toLocaleDateString();
  hours = new Date().toLocaleTimeString();
  fechaFull = this.date + '-' + this.hours;

  datacicloAdmico: CicloAcademicoI = {
    uid: null,
    carrera: null,
    numberCiclo: null,
    note: null,
    dateCreated: this.fechaFull,
  };

  // datacicloAdmico: Selection;
  cicloAdmicosList = [];
  carrerasList: any = [];
  id: any;
  deleted = false;

  limit = 80;
  inputLimit = 100;
  contador = 0;

  constructor(
    private cicloAcmicoSvc: CicloAcademicoService,
    private interactionSvc: InteractionService,
    private carreraFire: CarrerasService,
    private navCtrl: NavController
  ) {
    this.getAllCarreras();
  }

  ngOnInit() {}

  backButton() { this.navCtrl.navigateBack('/academico'); }
  onKey(event){ this.contador = event.target.value.length; }

  carreras(e: CustomEvent) {
    const data = e.detail.value;
    this.datacicloAdmico.carrera = data;
    console.log( this.datacicloAdmico.carrera );
  }

  async createcicloAdmico() {
    try {
      await this.interactionSvc.presentLoading('Agregando INFORMACIÓN...');
      return await this.cicloAcmicoSvc.createCicloAdmico('ciclo-academico', this.datacicloAdmico)
        .then(async () => {
          await this.interactionSvc.closeLoading();
          await this.navCtrl.navigateBack('/ciclo-academico');
        });
    } catch (error) { alert(error); }
  }

  async getAllCarreras() {
    try {
      return await this.carreraFire.getCarreras('carreras').then(async fireResponse => {
        await this.interactionSvc.presentLoading('CARGANDO...');
        return  fireResponse.subscribe( listCarrerasRef => {
          this.carrerasList = listCarrerasRef.map( carreraRef => {
            const carrera = carreraRef.payload.doc.data();
            carrera['id'] = carreraRef.payload.doc.id;
            this.id = carreraRef.payload.doc.id;
            this.interactionSvc.closeLoading();
            return carrera;
          });
        });
      });
    } catch (e_1) {alert(e_1); }
  }

}
