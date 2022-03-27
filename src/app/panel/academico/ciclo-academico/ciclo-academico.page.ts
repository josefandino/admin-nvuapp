import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ciclo-academico',
  templateUrl: './ciclo-academico.page.html',
  styleUrls: ['./ciclo-academico.page.scss'],
})
export class CicloAcademicoPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  backButton() {
    return this.navCtrl.navigateBack('/academico');
  }

}
