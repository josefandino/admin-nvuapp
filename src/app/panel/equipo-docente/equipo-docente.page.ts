import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-equipo-docente',
  templateUrl: './equipo-docente.page.html',
  styleUrls: ['./equipo-docente.page.scss'],
})
export class EquipoDocentePage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

}
