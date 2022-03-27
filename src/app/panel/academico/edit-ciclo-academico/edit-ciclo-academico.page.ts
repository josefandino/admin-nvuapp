import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-ciclo-academico',
  templateUrl: './edit-ciclo-academico.page.html',
  styleUrls: ['./edit-ciclo-academico.page.scss'],
})
export class EditCicloAcademicoPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  backButton() {
    return this.navCtrl.navigateBack('/ciclo-academico');
  }

}
