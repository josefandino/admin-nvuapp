import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GroupStudentsI } from 'src/app/models/panel/group-students';
import { InteractionService } from 'src/app/services/interaction.service';
import { GroupStudentsService } from 'src/app/services/panel/students/group-students.service';

@Component({
  selector: 'app-group-students-create',
  templateUrl: './group-students-create.page.html',
  styleUrls: ['./group-students-create.page.scss'],
})
export class GroupStudentsCreatePage implements OnInit {

  date = new Date().toLocaleDateString('sv-SE');
  hours = new Date().toLocaleTimeString();
  year = new Date().getFullYear();
  mes = new Date().getMonth();
  dia = new Date().getDay();
  fechaFull = new Date().toLocaleString('sv-SE');
  timestamp: any = new Date().getTime();

  dataGroupStuent: GroupStudentsI = {
    uid: null,
    groupStudentsId: null,
    nameGroup: null,
    note: null,
    dateCreated: this.fechaFull,
  };

  listGroupStuents: any = [];
  limit = 50;
  inputLimit = 100;
  contador = 0;

  constructor(
    private groupStudentsFire: GroupStudentsService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }

  backButton() { this.navCtrl.navigateBack('/group-students'); }
  onKey(event) { this.contador = event.target.value.length; }

  async createGroupStudent() {
    try {
      await this.interactionSvc.presentLoading('Agregando INFORMACIÓN...');
      return await this.groupStudentsFire.createGroupStudent('group-students', this.dataGroupStuent)
        .then(async () => {
          await this.interactionSvc.closeLoading();
          await this.navCtrl.navigateBack('/group-students');
        });
    } catch (error) { alert(error); }
  }

}
