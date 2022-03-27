import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vice-rectoria-academica',
  templateUrl: './vice-rectoria-academica.page.html',
  styleUrls: ['./vice-rectoria-academica.page.scss'],
})
export class ViceRectoriaAcademicaPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

}
