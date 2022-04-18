/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InteractionService } from 'src/app/services/interaction.service';
import { GroupStudentsService } from './../../../services/panel/students/group-students.service';

import { GroupStudentsI } from './../../../models/panel/group-students';

@Component({
  selector: 'app-group-students',
  templateUrl: './group-students.page.html',
  styleUrls: ['./group-students.page.scss'],
})
export class GroupStudentsPage implements OnInit {

  dataGroupStuent: GroupStudentsI;
  groupStudentsList = [];
  id: any;
  deleted = false;

  constructor(
    private groupStudentsFire: GroupStudentsService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) {
    this.getAllGroupStudents();
  }

  ngOnInit() { }

  backButton() { this.navCtrl.navigateBack('/students'); }

  async getAllGroupStudents() {
    try {
      await this.interactionSvc.presentLoading('CARGANDO...');
      await this.groupStudentsFire.getAllGroupStudents('group-students').then(async fireResponse => {
        fireResponse.subscribe(async listGroupStudentsRef => {
          this.groupStudentsList = listGroupStudentsRef.map( groupStudentRef => {
            const groupStudent = groupStudentRef.payload.doc.data();
            groupStudent['id'] = groupStudentRef.payload.doc.id;
            this.id = groupStudentRef.payload.doc.id;
            this.interactionSvc.closeLoading();
            return groupStudent;
          });
        });
      });
    } catch (e_1) {alert(e_1); }
  }

  groupStudentById() {
    const idGroupStudent = this.id;
    this.groupStudentsFire.getByIdGroupStudent('group-students', idGroupStudent).then(resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      });
    }).catch((e) => alert(e));
  }

  updateGroupStudent( dato) {
    const idGroupStudent = this.id;
    this.groupStudentsFire.updateGroupStudent('group-students', idGroupStudent, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE GroupStudent: ' + JSON.stringify(err)));
  }


  deleteGroupStudent(id) {
    this.groupStudentsFire.deleteGroupStudent('group-students', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }

}

