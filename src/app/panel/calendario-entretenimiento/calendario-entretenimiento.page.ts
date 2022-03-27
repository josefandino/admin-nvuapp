import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calendario-entretenimiento',
  templateUrl: './calendario-entretenimiento.page.html',
  styleUrls: ['./calendario-entretenimiento.page.scss'],
})
export class CalendarioEntretenimientoPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

}
