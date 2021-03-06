import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vice-rectoria-post-grado-investigacion',
  templateUrl: './vice-rectoria-post-grado-investigacion.page.html',
  styleUrls: ['./vice-rectoria-post-grado-investigacion.page.scss'],
})
export class ViceRectoriaPostGradoInvestigacionPage implements OnInit {

  constructor(
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

}
