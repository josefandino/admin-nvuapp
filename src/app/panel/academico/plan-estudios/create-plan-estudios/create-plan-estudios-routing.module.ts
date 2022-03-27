import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePlanEstudiosPage } from './create-plan-estudios.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePlanEstudiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePlanEstudiosPageRoutingModule {}
