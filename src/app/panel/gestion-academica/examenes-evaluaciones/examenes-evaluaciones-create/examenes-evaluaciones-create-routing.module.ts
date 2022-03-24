import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamenesEvaluacionesCreatePage } from './examenes-evaluaciones-create.page';

const routes: Routes = [
  {
    path: '',
    component: ExamenesEvaluacionesCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamenesEvaluacionesCreatePageRoutingModule {}
