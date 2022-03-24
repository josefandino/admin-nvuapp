import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradosConvocatoriasPage } from './grados-convocatorias.page';

const routes: Routes = [
  {
    path: '',
    component: GradosConvocatoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradosConvocatoriasPageRoutingModule {}
