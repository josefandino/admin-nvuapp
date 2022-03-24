/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { InteractionService } from './../../../services/interaction.service';
import { CoursesService } from './../../../services/panel/courses/courses.service';

import { CoursesI } from './../../../models/panel/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  dataCourse: CoursesI;

  coursesList = [];
  id: any;

  constructor(
    private coursesSvc: CoursesService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses() {
    this.coursesSvc.getCourses('courses').then(fireResponse => {
      fireResponse.subscribe(listCoursesRef => {
        this.interactionSvc.presentToast('Cargando...', 200, 'primary');
        this.coursesList = listCoursesRef.map(courseRef => {
          const course = courseRef.payload.doc.data();
          course['id'] = courseRef.payload.doc.id;
          this.id = courseRef.payload.doc.id;
          // console.log('este es el id del course', this.id)
          return course;
        });
      });
    });
  }

  courseById() {
    const idCourse = this.id;
    this.coursesSvc.getByIdCourse('courses', idCourse).then( resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      })
    });
  }

  updateCourse( dato) {
    const idCourse = this.id;
    this.coursesSvc.updateCourse('courses', idCourse, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE CURSO: ' + JSON.stringify(err)));
  }

  deleteCourse(id) {
    this.coursesSvc.deleteCourse('courses', id).then(resp => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }

}
