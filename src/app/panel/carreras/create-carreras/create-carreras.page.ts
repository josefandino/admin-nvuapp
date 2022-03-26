import { NavController } from '@ionic/angular';

import { CoursesService } from './../../../services/panel/courses/courses.service';
import { InteractionService } from './../../../services/interaction.service';

import { CarrerasI } from 'src/app/models/panel/carreras';

import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-create-carreras',
  templateUrl: './create-carreras.page.html',
  styleUrls: ['./create-carreras.page.scss'],
})
export class CreateCarrerasPage implements OnInit {

  limit = 2000;
  inputLimit = 100;

  date = new Date().toLocaleDateString();
  hours = new Date().toLocaleTimeString();

  fecha = this.date + ' ' + this.hours;

  dataCarrera: CarrerasI = {
    uid: null,
    nameClass: null,
    authorCarrera: null,
    clasificacion: null,
    note: null,
    dateCreated: this.fecha,
  };

  coursesList = [];
  id: any;

  constructor(
    private coursesSvc: CoursesService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }
  backButton() {
    this.navCtrl.navigateBack('/carreras');
  }

  clasificacion(e: CustomEvent) {
    const data = e.detail.value;
    this.dataCarrera.clasificacion = data;
    console.log('++', this.dataCarrera.clasificacion );
  }

  createCourse() {
    this.coursesSvc.create('carreras', this.dataCarrera)
      .then(async resp => {
        await this.interactionSvc.presentLoading('Agregando CARRERA...');
        await this.interactionSvc.closeLoading();
        await this.interactionSvc.presentToast('CARRERA agreado SATISFACTORIAMENTE al sistema...', 1000, 'primary');
        console.log('***** Resp ****** ', resp);
        setTimeout(() => {
          this.navCtrl.navigateBack('/carreras');
        }, 1000);

      }).catch((e) => alert(JSON.stringify(e)));
  }

}
