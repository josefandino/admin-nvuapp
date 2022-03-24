/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { InteractionService } from './../../services/interaction.service';

import { TeachersFireService } from './../../services/panel/teachers/teachers-fire.service';

import { TeacherI } from 'src/app/models/teachers';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
})
export class TeachersPage implements OnInit {

  dataTeacher: TeacherI;

  teachersList = [];
  id: any;

  constructor(
    private teachersFireSvc: TeachersFireService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.getAllTeachers();
  }

  createTeacher() {
    this.teachersFireSvc.create('teachers', this.dataTeacher)
      .then(async resp => {
        await this.interactionSvc.presentLoading('Agregando PROFESOR...');
        await this.interactionSvc.closeLoading();
        await this.interactionSvc.presentToast('PROFESOR agreado SATISFACTORIAMENTE al sistema...', 1000, 'primary');
        // console.log('***** Resp ****** ', resp);
        setTimeout(() => {
          this.navCtrl.navigateBack('/teachers');
        }, 1000);

      }).catch((e) => alert(JSON.stringify(e)));
  }

  getAllTeachers() {
    this.teachersFireSvc.getTeachers('teachers').then(fireResponse => {
      fireResponse.subscribe(listTeachersRef => {
        this.interactionSvc.presentToast('Cargando...', 200, 'primary');
        this.teachersList = listTeachersRef.map(teacherRef => {
          const teacher = teacherRef.payload.doc.data();
          teacher['id'] = teacherRef.payload.doc.id;
          this.id = teacherRef.payload.doc.id;
          return teacher;
        });
      });
    });
  }

  teacherById() {
    const idTeacher = this.id;
    this.teachersFireSvc.getByIdTeacher('teachers', idTeacher).then( resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      })
    });
  }

  updateTeacher( dato) {
    const idTeacher = this.id;
    this.teachersFireSvc.updateTeacher('teachers', idTeacher, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE TEACHER: ' + JSON.stringify(err)));
  }

  deleteTeacher(id) {
    this.teachersFireSvc.deleteTeacher('teachers', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }


}
