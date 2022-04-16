/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { TeacherI } from 'src/app/models/teachers';
import { InteractionService } from 'src/app/services/interaction.service';
import { TeachersFireService } from 'src/app/services/panel/teachers/teachers-fire.service';

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

  ngOnInit() { this.getAllTeachers(); }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
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

  async getAllTeachers() {
    try {
      return await this.teachersFireSvc.getTeachers('teachers').then(async fireResponse => {
        await this.interactionSvc.presentLoading('CARGANDO...');
        return await fireResponse.subscribe(listTeachersRef => {
          this.teachersList = listTeachersRef.map(teacherRef => {
            const teacher = teacherRef.payload.doc.data();
            teacher['id'] = teacherRef.payload.doc.id;
            this.id = teacherRef.payload.doc.id;
            this.interactionSvc.closeLoading();
            return teacher;
          });
        });
      });
    } catch (e_2) { alert(e_2); }
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
