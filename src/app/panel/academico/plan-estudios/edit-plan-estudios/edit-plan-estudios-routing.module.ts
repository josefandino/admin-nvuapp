import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPlanEstudiosPage } from './edit-plan-estudios.page';

const routes: Routes = [
  {
    path: '',
    component: EditPlanEstudiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPlanEstudiosPageRoutingModule {}
