import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamenesEvaluacionesPage } from './examenes-evaluaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ExamenesEvaluacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamenesEvaluacionesPageRoutingModule {}
