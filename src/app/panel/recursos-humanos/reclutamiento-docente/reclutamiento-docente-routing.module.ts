import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclutamientoDocentePage } from './reclutamiento-docente.page';

const routes: Routes = [
  {
    path: '',
    component: ReclutamientoDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclutamientoDocentePageRoutingModule {}
