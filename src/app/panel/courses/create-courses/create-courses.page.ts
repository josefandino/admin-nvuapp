import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { CoursesI } from './../../../models/panel/courses';
import { CoursesService } from './../../../services/panel/courses/courses.service';
import { InteractionService } from './../../../services/interaction.service';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.page.html',
  styleUrls: ['./create-courses.page.scss'],
})
export class CreateCoursesPage implements OnInit {

  dataCourse: CoursesI = {
    uid: null,
    name: null,
    carrera: null,
    numeroCiclo: null,
    teacher: null,
    codeCarrera: null,
    authorCarrera: null,
    note: null,
  };

  coursesList = [];
  id: any;
  limit = 200;
  inputLimit = 100;
  contador = 0;

  constructor(
    private coursesSvc: CoursesService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) { }
  ngOnInit() { }

  backButton() { this.navCtrl.navigateBack('/dashboard'); }
  onKey(event){ this.contador = event.target.value.length; }

  createCourse() {
    this.coursesSvc.create('courses', this.dataCourse)
      .then(async resp => {
        await this.interactionSvc.presentLoading('Agregando CURSO...');
        await this.interactionSvc.closeLoading();
        await this.interactionSvc.presentToast('CURSO agreado SATISFACTORIAMENTE al sistema...', 1000, 'primary');
        console.log('***** Resp ****** ', resp);
        setTimeout(() => {
          this.navCtrl.navigateBack('/courses');
        }, 1000);

      }).catch((e) => alert(JSON.stringify(e)));
  }

}
