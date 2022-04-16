/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CarrerasI } from 'src/app/models/panel/carreras';
import { PlanEstudiosI } from 'src/app/models/panel/plan-estudios';
import { InteractionService } from 'src/app/services/interaction.service';
import { CarrerasService } from 'src/app/services/panel/carreras/carreras.service';
import { PlanEstudiosFirebaseService } from 'src/app/services/panel/plan-estudios/plan-estudios-firebase.service';

@Component({
  selector: 'app-create-plan-estudios',
  templateUrl: './create-plan-estudios.page.html',
  styleUrls: ['./create-plan-estudios.page.scss'],
})
export class CreatePlanEstudiosPage implements OnInit {


  date = new Date().toLocaleDateString();
  hours = new Date().toLocaleTimeString();
  fechaFull = this.date + '-' + this.hours;

  dataPlanEstudio: PlanEstudiosI = {
    uid: null,
    title: null,
    description: null,
    dateExamen: null,
    dateCreated: this.fechaFull,
  };

  dataCarrera: CarrerasI;
  carrerasList: any = [];
  planEstudioList = [];

  limit = 200;
  id: any;
  inputLimit = 100;
  contador = 0;

  constructor(
    private firePlanEstudios: PlanEstudiosFirebaseService,
    private interactionSvc: InteractionService,
    private carreraFire: CarrerasService,
    private navCtrl: NavController,
  ) {
    this.initDataFire();
  }

  ngOnInit() { }

  async initDataFire() {
    await this.interactionSvc.presentLoading('CARGANDO...');
    const carreras = await this.getAllCarreras();
    this.interactionSvc.closeLoading();
  }

  backButton() { this.navCtrl.navigateBack('/plan-estudios'); }
  onKey(event) { this.contador = event.target.value.length; }

  async createplanEstudios() {
    try {
      await this.interactionSvc.presentLoading('Agregando INFORMACIÓN...');
      return await this.firePlanEstudios.createPlanEstudio('plan-estudios', this.dataPlanEstudio)
        .then(async () => {
          await this.interactionSvc.closeLoading();
          await this.navCtrl.navigateBack('/plan-estudios');
        });
    } catch (error) { alert(error); }
  }

  carreras(e: CustomEvent) {
    const data = e.detail.value;
    this.dataPlanEstudio.carrera = data;
    console.log(this.dataPlanEstudio.carrera);
  }


  async getAllCarreras() {
    try {
      return await this.carreraFire.getCarreras('carreras').then(async fireResponse => {
        fireResponse.subscribe( listCarrerasRef => {
          this.carrerasList = listCarrerasRef.map( carreraRef => {
            const carrera = carreraRef.payload.doc.data();
            carrera['id'] = carreraRef.payload.doc.id;
            this.id = carreraRef.payload.doc.id;
            return carrera;
          });
        });
      });
    } catch (e_1) {alert(e_1); }
  }

}
