import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { AddTeacherService } from './../../services/panel/teachers/add-teacher.service';
import { InteractionService } from './../../services/interaction.service';

import { TeacherI } from 'src/app/models/teachers';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.page.html',
  styleUrls: ['./add-teacher.page.scss'],
})
export class AddTeacherPage implements OnInit {

  dataTeacher: TeacherI = {
    uid: null,
    name: null,
    lastname: null,
    document: null,
    age: null,
    countryOfResidence: null,
    homeCity: null,
    phone: null,
    email: null,
    password: null,
    address: null,
    designacion: null,
    dateEntry: null,
    avatar: null,
    usurname: null,
    note: null,
    profile: 'teacher'
  };

  teachersList = [];

  constructor(
    private teacherFireSvc: AddTeacherService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }

  createTeacher() {
    this.teacherFireSvc.create('teachers', this.dataTeacher)
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

}
