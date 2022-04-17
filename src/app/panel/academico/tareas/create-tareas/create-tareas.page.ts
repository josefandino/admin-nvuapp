/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AsignaturaI } from './../../../../models/panel/asignatura';
import { CarrerasI } from 'src/app/models/panel/carreras';
import { TareasI } from './../../../../models/panel/tareas';
import { SectionI } from './../../../../models/panel/section';

import { CarrerasService } from 'src/app/services/panel/carreras/carreras.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { SectionService } from 'src/app/services/panel/section/section.service';
import { TareasFirebaseService } from 'src/app/services/panel/tareas/tareas-firebase.service';

@Component({
  selector: 'app-create-tareas',
  templateUrl: './create-tareas.page.html',
  styleUrls: ['./create-tareas.page.scss'],
})
export class CreateTareasPage implements OnInit {

  date = new Date().toLocaleDateString();
  hours = new Date().toLocaleTimeString();
  fechaFull = this.date + '-' + this.hours;

  dataTarea: TareasI = {
    uid: null,
    title: null,
    description: null,
    deadline: null,
    carrera: null,
    section: null,
    asignatura: null,
    url: null,
    file: null,
    dateCreated: this.fechaFull,
  };

  dataCarrera: CarrerasI;
  carrerasList: any = [];

  dataAsignaturas: AsignaturaI;
  asignaturasList = [];

  dataSections: SectionI;
  sectiosList = [];
  id: any;

  limit = 80;
  inputLimit = 100;
  contador = 0;

  constructor(
    private tareasFireSvc: TareasFirebaseService,
    private interactionSvc: InteractionService,
    private carreraFire: CarrerasService,
    private sectionFireSvc: SectionService,
    private navCtrl: NavController,
  ) {
    this.initDataFire();
    console.log(this.date);
  }

  ngOnInit() { }

  async initDataFire() {
    await this.interactionSvc.presentLoading('CARGANDO...');
    const carreras = await this.getAllCarreras();
    const sections = await this.getAllSections();
    const asignaturas = await this.getAllAsignaturas();
    this.interactionSvc.closeLoading();
  }

  backButton() { this.navCtrl.navigateBack('/tareas'); }
  onKey(event) { this.contador = event.target.value.length; }

  carreras(e: CustomEvent) {
    const data = e.detail.value;
    this.dataTarea.carrera = data;
    console.log(this.dataTarea.carrera);
  }

  sections(e: CustomEvent) {
    const data = e.detail.value;
    this.dataTarea.section = data;
    console.log(this.dataTarea.section);
  }

  asignaturas(e: CustomEvent) {
    const data = e.detail.value;
    this.dataTarea.asignatura = data;
    console.log(this.dataTarea.asignatura);
  }

  async createTarea() {
    try {
      await this.interactionSvc.presentLoading('Agregando INFORMACIÓN...');
      return await this.tareasFireSvc.createTarea('tareas', this.dataTarea)
        .then(async () => {
          await this.interactionSvc.closeLoading();
          await this.navCtrl.navigateBack('/tareas');
        });
    } catch (error) { alert(error); }
  }

  async getAllCarreras() {
    try {
      return await this.carreraFire.getCarreras('carreras').then(async fireResponse => {
        fireResponse.subscribe(listCarrerasRef => {
          this.carrerasList = listCarrerasRef.map(carreraRef => {
            const carrera = carreraRef.payload.doc.data();
            carrera['id'] = carreraRef.payload.doc.id;
            this.id = carreraRef.payload.doc.id;
            return carrera;
          });
        });
      });
    } catch (e_1) { alert(e_1); }
  }

  async getAllSections() {
    try {
      return await this.sectionFireSvc.getSections('sections').then(async fireResponse => {
        fireResponse.subscribe(listSectionRef => {
          this.sectiosList = listSectionRef.map(sectionRef => {
            const section = sectionRef.payload.doc.data();
            section['id'] = sectionRef.payload.doc.id;
            this.id = sectionRef.payload.doc.id;
            return section;
          });
        });
      });
    } catch (e_2) { alert(e_2); }
  }

  async getAllAsignaturas() {
    try {
      return await this.sectionFireSvc.getSections('sections').then(async fireResponse => {
        fireResponse.subscribe(lisAsignaturasRef => {
          this.asignaturasList = lisAsignaturasRef.map(asignaturaRef => {
            const asignatura = asignaturaRef.payload.doc.data();
            asignatura['id'] = asignaturaRef.payload.doc.id;
            this.id = asignaturaRef.payload.doc.id;
            return asignatura;
          });
        });
      });
    } catch (e_3) { alert(e_3); }
  }

}

