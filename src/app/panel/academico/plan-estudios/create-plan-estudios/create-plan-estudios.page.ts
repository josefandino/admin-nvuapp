import { Component, OnInit } from '@angular/core';
import { PlanEstudiosFirebaseService } from 'src/app/services/panel/plan-estudios/plan-estudios-firebase.service';

@Component({
  selector: 'app-create-plan-estudios',
  templateUrl: './create-plan-estudios.page.html',
  styleUrls: ['./create-plan-estudios.page.scss'],
})
export class CreatePlanEstudiosPage implements OnInit {

  constructor(
    private firePlanEstudios: PlanEstudiosFirebaseService
  ) { }

  ngOnInit() {
  }

}
