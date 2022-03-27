import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-ciclo-academico',
  templateUrl: './create-ciclo-academico.page.html',
  styleUrls: ['./create-ciclo-academico.page.scss'],
})
export class CreateCicloAcademicoPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  backButton() {
    return this.navCtrl.navigateBack('/ciclo-academico');
  }

}
