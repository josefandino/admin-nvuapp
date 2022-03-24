import { NavController } from '@ionic/angular';

import { CoursesService } from './../../../services/panel/courses/courses.service';
import { InteractionService } from './../../../services/interaction.service';

import { CarrerasI } from 'src/app/models/panel/carreras';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-carreras',
  templateUrl: './create-carreras.page.html',
  styleUrls: ['./create-carreras.page.scss'],
})
export class CreateCarrerasPage implements OnInit {

  dataCarrera: CarrerasI = {
    uid: null,
    nameclass: null,
    teacher: null,
    codeCarrera: null,
    authorCarrera: null,
    note: null,
  };

  coursesList = [];
  id: any;

  constructor(
    private coursesSvc: CoursesService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }

  createCourse() {
    this.coursesSvc.create('carreras', this.dataCarrera)
      .then(async resp => {
        await this.interactionSvc.presentLoading('Agregando CARRERA...');
        await this.interactionSvc.closeLoading();
        await this.interactionSvc.presentToast('CARRERA agreado SATISFACTORIAMENTE al sistema...', 1000, 'primary');
        console.log('***** Resp ****** ', resp);
        setTimeout(() => {
          this.navCtrl.navigateBack('/courses');
        }, 1000);

      }).catch((e) => alert(JSON.stringify(e)));
  }

}
