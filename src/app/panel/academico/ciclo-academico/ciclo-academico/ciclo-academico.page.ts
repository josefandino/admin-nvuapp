/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CicloAcademicoI } from 'src/app/models/panel/ciclo-academico';
import { InteractionService } from 'src/app/services/interaction.service';
import { CicloAcademicoService } from 'src/app/services/panel/ciclo-academico/ciclo-academico.service';

@Component({
  selector: 'app-ciclo-academico',
  templateUrl: './ciclo-academico.page.html',
  styleUrls: ['./ciclo-academico.page.scss'],
})
export class CicloAcademicoPage implements OnInit {

  dataCarrera: CicloAcademicoI;
  cicloAcademicoList = [];
  id: any;
  deleted = false;

  constructor(
    private cicloAcmicoSvc: CicloAcademicoService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController
  ) { this.getAllCicloAdmico(); }

  ngOnInit() { }
  backButton() { this.navCtrl.navigateBack('/academico'); }

  async getAllCicloAdmico() {
    try {
      await this.interactionSvc.presentLoading('CARGANDO...');
      await this.cicloAcmicoSvc.getCicloAdmicos('ciclo-academico').then(async fireResponse => {
        fireResponse.subscribe(async listCicloAdmicoRef => {
          this.cicloAcademicoList = listCicloAdmicoRef.map(sectionRef => {
            const section = sectionRef.payload.doc.data();
            section['id'] = sectionRef.payload.doc.id;
            this.id = sectionRef.payload.doc.id;
            this.interactionSvc.closeLoading();
            return section;
          });
        });
      });
    } catch (e_1) { alert(e_1); }
  }

  sectionById() {
    const idCicloAdmico = this.id;
    this.cicloAcmicoSvc.getByIdCicloAdmico('section', idCicloAdmico).then(resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      });
    });
  }

  updateCicloAdmico(dato) {
    const idCicloAdmico = this.id;
    this.cicloAcmicoSvc.updateCicloAdmico('ciclo-academico', idCicloAdmico, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE CicloAdmico: ' + JSON.stringify(err)));
  }


  deleteCicloAdmico(id) {
    this.cicloAcmicoSvc.deleteCicloAdmico('ciclo-academico', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }
}
