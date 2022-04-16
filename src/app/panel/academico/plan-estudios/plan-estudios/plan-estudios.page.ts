/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { PlanEstudiosI } from 'src/app/models/panel/plan-estudios';
import { InteractionService } from 'src/app/services/interaction.service';

import { PlanEstudiosFirebaseService } from 'src/app/services/panel/plan-estudios/plan-estudios-firebase.service';

@Component({
  selector: 'app-plan-estudios',
  templateUrl: './plan-estudios.page.html',
  styleUrls: ['./plan-estudios.page.scss'],
})
export class PlanEstudiosPage implements OnInit {

  dataPlanEstudio: PlanEstudiosI;
  planEstudiosList = [];
  id: any;
  deleted = false;

  constructor(
    private firePlanEstudios: PlanEstudiosFirebaseService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController
  ) {
    this.getAllPlanEstudios();
  }

  ngOnInit() {
  }

  backButton() { return this.navCtrl.navigateBack('/academico'); }

  async getAllPlanEstudios() {
    try {
      await this.interactionSvc.presentLoading('CARGANDO...');
      await this.firePlanEstudios.getPlanEstudio('plan-estudios').then(async fireResponse => {
        fireResponse.subscribe(async listPlanEstudioRef => {
          this.planEstudiosList = listPlanEstudioRef.map( sectionRef => {
            const section = sectionRef.payload.doc.data();
            section['id'] = sectionRef.payload.doc.id;
            this.id = sectionRef.payload.doc.id;
            this.interactionSvc.closeLoading();
            return section;
          });
        });
      });
    } catch (e_1) {alert(e_1); }
  }

  sectionById() {
    const idPlanEstudio = this.id;
    this.firePlanEstudios.getByIdPlanEstudio('plan-estudios', idPlanEstudio).then( resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      });
    });
  }

  updatePlanEstudio( dato) {
    const idPlanEstudio = this.id;
    this.firePlanEstudios.updatePlanEstudio('plan-estudios', idPlanEstudio, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE PlanEstudio: ' + JSON.stringify(err)));
  }


  deletePlanEstudio(id) {
    this.firePlanEstudios.deletePlanEstudio('plan-estudios', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }

}

