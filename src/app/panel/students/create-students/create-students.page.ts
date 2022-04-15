import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AdmisionI } from 'src/app/models/admision';
import { InteractionService } from 'src/app/services/interaction.service';
import { StudentsService } from 'src/app/services/panel/students/students.service';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.page.html',
  styleUrls: ['./create-students.page.scss'],
})
export class CreateStudentsPage implements OnInit {
  student: AdmisionI = {
    uid: '',
    name: '',
    lastname: '',
    document: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    carrera: '',
    optsContactado: 0,
    information: '',
    politik: false,
    admitido: false
  };

  limit = 200;
  inputLimit = 100;
  contador = 0;

  constructor(
    private studentService: StudentsService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() { this.navCtrl.navigateBack('/dashboard'); }

  onKey(event){ this.contador = event.target.value.length; }

  createStudent() {
    this.studentService.create('students', this.student)
      .then(async resp => {
        await this.interactionSvc.presentLoading('Agregando Estudiante...');
        await this.interactionSvc.closeLoading();
        await this.interactionSvc.presentToast('Estudiante agreado SATISFACTORIAMENTE al sistema...', 1000, 'primary');
        setTimeout(() => {
          this.navCtrl.navigateBack('/students');
        }, 1000);
      }).catch((e) => alert(JSON.stringify(e)));
  }

}
