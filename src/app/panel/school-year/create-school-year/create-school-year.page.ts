/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AsignaturaI } from 'src/app/models/panel/asignatura';
import { CarrerasI } from 'src/app/models/panel/carreras';
import { SectionI } from 'src/app/models/panel/section';
import { InteractionService } from 'src/app/services/interaction.service';
import { SchoolYearService } from 'src/app/services/panel/school-year/school-year.service';

import { SchoolYearI } from './../../../models/panel/school-year';

@Component({
  selector: 'app-create-school-year',
  templateUrl: './create-school-year.page.html',
  styleUrls: ['./create-school-year.page.scss'],
})
export class CreateSchoolYearPage implements OnInit {

  date = new Date().toLocaleDateString();
  hours = new Date().toLocaleTimeString();
  year = new Date().getFullYear();
  mes = new Date().getMonth();
  dia = new Date().getDay();
  fechaFull = new Date().toLocaleString('sv-SE');

  fecha = new Date().toLocaleDateString('sv-SE');

  timestamp: any = new Date().getTime();


  schoolYearList: any = [];

  dataSchoolYear: SchoolYearI = {
    uid: null,
    schoolyearID: this.timestamp,
    schooltype: null,
    schoolyear: null,
    schoolyeartitle: null,
    startingdate: null,
    endingdate: null,
    semestercode: null,
    createDate: this.fechaFull,
    modifyDate: this.fechaFull,
    createUserID: null,
    createUsername: null,
    createUsertype: null,
    dateCreated: this.fechaFull,
  };

  id: any;

  limit = 80;
  inputLimit = 100;
  contador = 0;

  constructor(
    private interactionSvc: InteractionService,
    private schoolYearFire: SchoolYearService,
    private navCtrl: NavController,
  ) {
    this.initDataFire();
  }

  ngOnInit() { }

  backButton() { this.navCtrl.navigateBack('/school-year'); }
  onKey(event) { this.contador = event.target.value.length; }

  async initDataFire() {
    await this.interactionSvc.presentLoading('CARGANDO...');
    const schoolYear = await this.getAllSchoolYear();
    this.interactionSvc.closeLoading();
  }

  async createSchoolYear() {
    try {
      await this.interactionSvc.presentLoading('Agregando INFORMACIÓN...');
      return await this.schoolYearFire.createSchoolYearn('school-year', this.dataSchoolYear)
        .then(async () => {
          await this.interactionSvc.closeLoading();
          await this.navCtrl.navigateBack('/school-year');
        });
    } catch (error) { alert(error); }
  }

  async getAllSchoolYear() {
    try {
      await this.schoolYearFire.getSchoolYearns('school-year').then(async fireResponse => {
        fireResponse.subscribe(async listSchoolYearRef => {
          this.schoolYearList = listSchoolYearRef.map( schoolYearRef => {
            const schoolYear = schoolYearRef.payload.doc.data();
            schoolYear['id'] = schoolYearRef.payload.doc.id;
            this.id = schoolYearRef.payload.doc.id;
            return schoolYear;
          });
        });
      });
    } catch (e_1) {alert(e_1); }
  }

}

