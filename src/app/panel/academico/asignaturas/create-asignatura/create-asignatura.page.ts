/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AsignaturaI } from 'src/app/models/panel/asignatura';
import { InteractionService } from 'src/app/services/interaction.service';
import { AsignaturasFirebaseService } from 'src/app/services/panel/asignaturas/asignaturas-firebase.service';
import { CarrerasService } from 'src/app/services/panel/carreras/carreras.service';
import { TeachersFireService } from 'src/app/services/panel/teachers/teachers-fire.service';

@Component({
  selector: 'app-create-asignatura',
  templateUrl: './create-asignatura.page.html',
  styleUrls: ['./create-asignatura.page.scss'],
})
export class CreateAsignaturaPage implements OnInit {

  limit = 2000;
  inputLimit = 100;

  date = new Date().toLocaleDateString();
  hours = new Date().toLocaleTimeString();

  fecha = this.date + ' ' + this.hours;

  nameTeacher = '';
  nameAsignatura = '';
  nameCarrera = '';
  id: any = '';

  tipo;
  dataAsignatura: AsignaturaI = {
    uid: null,
    id: this.id,
    nameCarrera: null,
    tipo: null,
    promedioAprobacion: null,
    promedioFinal: null,
    nameAsignatura: null,
    nameAuthor: null,
    nameTeacher: null,
    codeAsignatura: null,
    numberCiclo: null,
    note: null,
    dateCreated: this.fecha,
  };

  asignaturaList = [];
  carrerasList = [];
  teachersList = [];

  constructor(
    private fireAsignatura: AsignaturasFirebaseService,
    private fireTeachers: TeachersFireService,
    private carreraFire: CarrerasService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) {
    this.getAllCarreras();
    this.getAllsTeachers();
}

  ngOnInit() { }
  backButton() {
    this.navCtrl.navigateBack('/asignatura');
  }

  selectedTipo(e: CustomEvent) {
    const data = e.detail.value;
    this.dataAsignatura.tipo = data;
    console.log( this.dataAsignatura.tipo );
  }

  selectedCarrera(e: CustomEvent) {
    const data = e.detail.value;
    this.dataAsignatura.nameCarrera = data;
    console.log(this.nameAsignatura);
  }

  selectedTeacher(e: CustomEvent) {
    const data = e.detail.value;
    this.dataAsignatura.nameTeacher = data;
    console.log(this.nameTeacher);
  }

  createAsignatura() {
    this.fireAsignatura.createAsignatura('asignaturas', this.dataAsignatura)
      .then(async resp => {
        await this.interactionSvc.presentLoading('Agregando ASIGNATURA...');
        await this.interactionSvc.closeLoading();
        await this.interactionSvc.presentToast('ASIGNATURA agreado SATISFACTORIAMENTE al sistema...', 1000, 'primary');
        console.log('***** Resp ****** ', resp);
        setTimeout(() => {
          this.navCtrl.navigateBack('/asignatura');
        }, 1000);

      }).catch((e) => alert(JSON.stringify(e)));
  }

  // ADD CARRERAS
  getAllCarreras() {
    this.carreraFire.getCarreras('carreras').then(fireResponse => {
      fireResponse.subscribe(listCarrerasRef => {
        this.interactionSvc.presentToast('Cargando...', 200, 'primary');
        this.carrerasList = listCarrerasRef.map(carreraRef => {
          const carrera = carreraRef.payload.doc.data();
          carrera['id'] = carreraRef.payload.doc.id;
          this.id = carreraRef.payload.doc.id;
          return carrera;
        });
      });
    });
  }

  // ADD TEACHERS
  getAllsTeachers() {
    this.fireTeachers.getTeachers('teachers').then(fireResponse => {
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

}
