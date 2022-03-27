import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asociacion-alumons',
  templateUrl: './asociacion-alumons.page.html',
  styleUrls: ['./asociacion-alumons.page.scss'],
})
export class AsociacionAlumonsPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }
}
