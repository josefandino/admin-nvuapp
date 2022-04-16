/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CarrerasI } from 'src/app/models/panel/carreras';
import { SectionI } from 'src/app/models/panel/section';
import { TeacherI } from 'src/app/models/teachers';
import { InteractionService } from 'src/app/services/interaction.service';
import { CarrerasService } from 'src/app/services/panel/carreras/carreras.service';
import { SectionService } from 'src/app/services/panel/section/section.service';
import { TeachersFireService } from 'src/app/services/panel/teachers/teachers-fire.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.page.html',
  styleUrls: ['./create-section.page.scss'],
})
export class CreateSectionPage implements OnInit {

  date = new Date().toLocaleDateString();
  hours = new Date().toLocaleTimeString();
  fechaFull = this.date + '-' + this.hours;

  dataSection: SectionI = {
    uid: null,
    section: null,
    categoria: null,
    capacidad: null,
    carrera: null,
    teacher: null,
    note: null,
    dateCreated: this.fechaFull,
  };

  dataCarrera: CarrerasI;
  carrerasList: any = [];
  sectionList = [];
  dataTeacher: TeacherI;
  teachersList = [];
  id: any;

  limit = 80;
  inputLimit = 100;
  contador = 0;

  constructor(
    private teachersFireSvc: TeachersFireService,
    private interactionSvc: InteractionService,
    private carreraFire: CarrerasService,
    private sectionSvc: SectionService,
    private navCtrl: NavController,
  ) {
    // this.getAllCarreras();
    // this.getAllTeachers();
    this.initDataFire();
  }

  ngOnInit() { }

  async initDataFire() {
    await this.interactionSvc.presentLoading('CARGANDO...');
    const carreras = await this.getAllCarreras();
    const teachers = await this.getAllTeachers();
    this.interactionSvc.closeLoading();
  }

  backButton() { this.navCtrl.navigateBack('/section'); }
  onKey(event){ this.contador = event.target.value.length; }

  carreras(e: CustomEvent) {
    const data = e.detail.value;
    this.dataSection.carrera = data;
    console.log(this.dataSection.carrera);
  }

  teachers(e: CustomEvent) {
    const data = e.detail.value;
    this.dataSection.teacher = data;
    console.log(this.dataSection.teacher);
  }

  section(e: CustomEvent) {
    const data = e.detail.value;
    this.dataSection.section = data;
    console.log(this.dataSection.section);
  }

  categoria(e: CustomEvent) {
    const data = e.detail.value;
    this.dataSection.categoria = data;
    console.log(this.dataSection.categoria);
  }

  async createSection() {
    try {
      await this.interactionSvc.presentLoading('Agregando INFORMACIÓN...');
      return await this.sectionSvc.createSection('section', this.dataSection)
        .then(async () => {
          await this.interactionSvc.closeLoading();
          await this.navCtrl.navigateBack('/section');
        });
    } catch (error) { alert(error); }
  }

  async getAllCarreras() {
    try {
      return await this.carreraFire.getCarreras('carreras').then(async fireResponse => {
        fireResponse.subscribe( listCarrerasRef => {
          this.carrerasList = listCarrerasRef.map( carreraRef => {
            const carrera = carreraRef.payload.doc.data();
            carrera['id'] = carreraRef.payload.doc.id;
            this.id = carreraRef.payload.doc.id;
            return carrera;
          });
        });
      });
    } catch (e_1) {alert(e_1); }
  }

  async getAllTeachers() {
    try {
      return await this.teachersFireSvc.getTeachers('teachers').then(async fireResponse => {
        // await this.interactionSvc.presentLoading('CARGANDO...');
        fireResponse.subscribe(listTeachersRef => {
          this.teachersList = listTeachersRef.map(teacherRef => {
            const teacher = teacherRef.payload.doc.data();
            teacher['id'] = teacherRef.payload.doc.id;
            this.id = teacherRef.payload.doc.id;
            // this.interactionSvc.closeLoading();
            return teacher;
          });
        });
      });
    } catch (e_2) { alert(e_2); }
  }

}
