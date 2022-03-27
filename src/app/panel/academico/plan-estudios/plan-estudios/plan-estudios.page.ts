import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { PlanEstudiosFirebaseService } from 'src/app/services/panel/plan-estudios/plan-estudios-firebase.service';

@Component({
  selector: 'app-plan-estudios',
  templateUrl: './plan-estudios.page.html',
  styleUrls: ['./plan-estudios.page.scss'],
})
export class PlanEstudiosPage implements OnInit {

  constructor(
    private firePlanEstudios: PlanEstudiosFirebaseService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  backButton() {
    return this.navCtrl.navigateBack('/academico');
  }
}
