import { Component, OnInit } from '@angular/core';
import { PlanEstudiosFirebaseService } from 'src/app/services/panel/plan-estudios/plan-estudios-firebase.service';

@Component({
  selector: 'app-edit-plan-estudios',
  templateUrl: './edit-plan-estudios.page.html',
  styleUrls: ['./edit-plan-estudios.page.scss'],
})
export class EditPlanEstudiosPage implements OnInit {

  constructor(
    private firePlanEstudios: PlanEstudiosFirebaseService
  ) { }

  ngOnInit() {
  }

}
