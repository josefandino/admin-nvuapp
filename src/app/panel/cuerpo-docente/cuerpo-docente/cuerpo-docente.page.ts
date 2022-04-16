/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CuerpoDocenteI, } from 'src/app/models/cuerpo-docente';
import { InteractionService } from 'src/app/services/interaction.service';
import { CuerpoDocenteService } from 'src/app/services/panel/docentes/cuerpo-docente.service';

@Component({
  selector: 'app-cuerpo-docente',
  templateUrl: './cuerpo-docente.page.html',
  styleUrls: ['./cuerpo-docente.page.scss'],
})
export class CuerpoDocentePage implements OnInit {

  dataDocente: CuerpoDocenteI;
  docentesList = [];
  id: any;

  constructor(
    private docentesFireSvc: CuerpoDocenteService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) {
    this.getAllDocentes();
  }

  ngOnInit() { this.getAllDocentes(); }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

  async getAllDocentes() {
    return await this.docentesFireSvc.getDocentes('docentes')
      .then(async fireResponse => {
      await fireResponse.subscribe(listDocentesRef => {
        this.docentesList = listDocentesRef.map(teacherRef => {
          const teacher = teacherRef.payload.doc.data();
          teacher['id'] = teacherRef.payload.doc.id;
          this.id = teacherRef.payload.doc.id;
          return teacher;
        });
      });
    }).catch((e_2) => alert(e_2));
  }

  teacherById() {
    const idDocente = this.id;
    this.docentesFireSvc.getByIdDocente('docentes', idDocente).then( resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      });
    });
  }

  updateDocente( dato) {
    const idDocente = this.id;
    this.docentesFireSvc.updateDocente('docentes', idDocente, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE TEACHER: ' + (err)));
  }

  deleteDocente(id) {
    this.docentesFireSvc.deleteDocente('docentes', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + (err)));
  }
}
