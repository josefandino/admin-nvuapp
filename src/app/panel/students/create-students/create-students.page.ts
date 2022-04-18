/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AdmisionI } from 'src/app/models/admision';
import { AsignaturaI } from 'src/app/models/panel/asignatura';
import { CarrerasI } from 'src/app/models/panel/carreras';
import { SectionI } from 'src/app/models/panel/section';
import { StudentsI } from 'src/app/models/panel/student';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { AsignaturasFirebaseService } from 'src/app/services/panel/asignaturas/asignaturas-firebase.service';
import { CarrerasService } from 'src/app/services/panel/carreras/carreras.service';
import { SectionService } from 'src/app/services/panel/section/section.service';
import { StudentsService } from 'src/app/services/panel/students/students.service';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.page.html',
  styleUrls: ['./create-students.page.scss'],
})
export class CreateStudentsPage implements OnInit {

  date = new Date().toLocaleDateString('sv-SE');
  hours = new Date().toLocaleTimeString();
  year = new Date().getFullYear();
  mes = new Date().getMonth();
  dia = new Date().getDay();
  fechaFull = new Date().toLocaleString('sv-SE');
  fecha = new Date().toLocaleDateString('sv-SE');
  timestamp: any = new Date().getTime();

  dataStudent: StudentsI = {
    uid: '',
    document: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    information: '',
    studentID: '',
    fullName: '',
    dob: '',
    sex: '',
    state: '',
    address: '',
    classesID: '',
    sectionID: '',
    roll: '',
    bloodgroup: '',
    carrera: null,
    asignatura: null,
    registerNO: '',
    library: '',
    photo: '',
    username: '',
    password: '',
    usertypeID: '',
    create_date: this.date,
    modify_date: this.date,
    create_userID: '',
    create_username: this.date,
    create_usertype: this.date,
    active: 'false',
    profile: 'student',
    dateCreated: this.date,
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

  countries: any = [];

  constructor(
    private asignaturaFireSvc: AsignaturasFirebaseService,
    private interactionSvc: InteractionService,
    private studentService: StudentsService,
    private countriesSvc: CountriesService,
    private sectionFireSvc: SectionService,
    private carreraFire: CarrerasService,
    private navCtrl: NavController,
  ) {
    this.initializar();
  }

  ngOnInit() {}

  backButton() { this.navCtrl.navigateBack('/students'); }
  onKey(event) { this.contador = event.target.value.length; }

  async initializar() {
    await this.interactionSvc.presentLoading('CARGANDO...');
    await this.paisesData();
    await this.getAllCarreras();
    await this.getAllAsignaturas();
    await this.interactionSvc.closeLoading();
  }

  createStudent() {
    this.studentService.create('students', this.dataStudent)
      .then(async resp => {
        await this.interactionSvc.presentLoading('Agregando Estudiante...');
        await this.interactionSvc.closeLoading();
        setTimeout(() => {
          this.navCtrl.navigateBack('/students');
        }, 1000);
      }).catch((e) => alert(JSON.stringify(e)));
  }

  paises(e: CustomEvent) {
    const data = e.detail.value;
    this.dataStudent.country = data;
    console.log(this.dataStudent.country);
  }

  sexo(e: CustomEvent) {
    const data = e.detail.value;
    this.dataStudent.sex = data;
    console.log(this.dataStudent.sex);
  }

  carreras(e: CustomEvent) {
    const data = e.detail.value;
    this.dataStudent.carrera = data;
    console.log(this.dataStudent.carrera);
  }

  // sections(e: CustomEvent) {
  //   const data = e.detail.value;
  //   this.dataStudent.section = data;
  //   console.log(this.dataStudent.section);
  // }

  asignaturas(e: CustomEvent) {
    const data = e.detail.value;
    this.dataStudent.asignatura = data;
    console.log(this.dataStudent.asignatura);
  }

  async paisesData() {
    const countires = await this.countriesSvc.paises();
    this.countries = countires;
    return;
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
      return await this.asignaturaFireSvc.getAsignaturas('asignaturas').then(async fireResponse => {
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

  // getAllAsignaturas(): Promise<any> {
  //   return this.fireAsignatura.getAsignaturas('asignaturas').then(fireResponse => {
  //     fireResponse.subscribe(listAsignaturasRef => {
  //       this.interactionSvc.presentToast('Cargando...', 200, 'primary');
  //       this.asignaturasList = listAsignaturasRef.map(asignaturaRef => {
  //         const asignatura = asignaturaRef.payload.doc.data();
  //         asignatura['id'] = asignaturaRef.payload.doc.id;
  //         this.id = asignaturaRef.payload.doc.id;
  //         return asignatura;
  //       });
  //     });
  //   }).catch((err) => alert('ERROR: ' + JSON.stringify(err)));
  // }

}
