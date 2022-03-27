import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanEstudiosPage } from './plan-estudios.page';

const routes: Routes = [
  {
    path: '',
    component: PlanEstudiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanEstudiosPageRoutingModule {}
