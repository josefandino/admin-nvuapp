import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-universitario',
  templateUrl: './registro-universitario.page.html',
  styleUrls: ['./registro-universitario.page.scss'],
})
export class RegistroUniversitarioPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

}
