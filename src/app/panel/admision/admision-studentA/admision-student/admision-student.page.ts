import { Component, OnInit } from '@angular/core';

import { InteractionService } from '../../../../services/interaction.service';

import { AdmisionI } from '../../../../models/admision';
import { StudentsService } from 'src/app/services/panel/students/students.service';

@Component({
  selector: 'app-admision-student',
  templateUrl: './admision-student.page.html',
  styleUrls: ['./admision-student.page.scss'],
})
export class AdmisionStudentPage implements OnInit {

  students = [];
  showAdmitidos = true;
  id = '';
  dataAdn: AdmisionI = {
    uid: null,
    name: null,
    lastname: null,
    document: null,
    email: null,
    phone: null,
    country: null,
    city: null,
    carrera: null,
    optsContactado: null,
    information: null,
    politik: null,
    admitido: false
  };

  constructor(
    private studentService: StudentsService,
    private interactionSvc: InteractionService
  ) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(){
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

  editStudent(id, admitido){

    this.studentService.edit('students', id, {admitido})
      .catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }


}
