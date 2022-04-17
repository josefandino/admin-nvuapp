/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { SchoolYearI } from './../../../models/panel/school-year';

import { InteractionService } from 'src/app/services/interaction.service';
import { SchoolYearService } from 'src/app/services/panel/school-year/school-year.service';

@Component({
  selector: 'app-school-year',
  templateUrl: './school-year.page.html',
  styleUrls: ['./school-year.page.scss'],
})
export class SchoolYearPage implements OnInit {

  dataSchoolYear: SchoolYearI;
  schoolYearList = [];
  id: any;
  deleted = false;

  constructor(
    private interactionSvc: InteractionService,
    private schoolYearFire: SchoolYearService,
    private navCtrl: NavController
  ) {
    this.getAllSchoolYear().then(async () => {
    });
  }

  ngOnInit() { }
  backButton() { this.navCtrl.navigateBack('/dashboard'); }

  async getAllSchoolYear() {
    try {
      await this.interactionSvc.presentLoading('CARGANDO...');
      await this.schoolYearFire.getSchoolYearns('school-year').then(async fireResponse => {
        fireResponse.subscribe(async listSchoolYearRef => {
          this.schoolYearList = listSchoolYearRef.map( schoolYearRef => {
            const schoolYear = schoolYearRef.payload.doc.data();
            schoolYear['id'] = schoolYearRef.payload.doc.id;
            this.id = schoolYearRef.payload.doc.id;
            this.interactionSvc.closeLoading();
            return schoolYear;
          });
        });
      });
    } catch (e_1) {alert(e_1); }
  }

  schoolYearById() {
    const idSchoolYear = this.id;
    this.schoolYearFire.getByIdSchoolYearn('school-year', idSchoolYear).then( resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      });
    });
  }

  updateSchoolYear( dato) {
    const idSchoolYear = this.id;
    this.schoolYearFire.updateSchoolYearn('school-year', idSchoolYear, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE SchoolYear: ' + JSON.stringify(err)));
  }


  deleteSchoolYear(id) {
    this.schoolYearFire.deleteSchoolYearn('school-year', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }

}
