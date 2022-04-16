/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AdmisionI } from 'src/app/models/admision';
import { InteractionService } from 'src/app/services/interaction.service';
import { StudentsService } from 'src/app/services/panel/students/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  student: AdmisionI;
  students = [];
  id: any;

  constructor(
    private studentService: StudentsService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getAllStudents();
  }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

  getAllStudents() {
    this.studentService.getAll('students').then(fireResponse => {
      fireResponse.subscribe(listStudentsRef => {
        this.interactionSvc.presentToast('Cargando...', 200, 'primary');
        this.students = listStudentsRef.map(studentsRef => {
          const student = studentsRef.payload.doc.data();
          student['id'] = studentsRef.payload.doc.id;
          this.id = studentsRef.payload.doc.id;
          return student;
        });
      });
    });
  }

  deleteStudent(id) {
    this.studentService.delete('students', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }

}
