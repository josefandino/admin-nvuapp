import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-records-student',
  templateUrl: './records-student.page.html',
  styleUrls: ['./records-student.page.scss'],
})
export class RecordsStudentPage implements OnInit {

  records = [
    { redirecTo: '/notas', name: 'Notas' },
    { name: 'Asistencia estudiante', redirectTo: '/asistencia' },
    { redirecTo: '', name: 'Programa de estudios' },
    { redirecTo: '', name: 'Pagos' },
    { redirecTo: '', name: 'Admisión' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
