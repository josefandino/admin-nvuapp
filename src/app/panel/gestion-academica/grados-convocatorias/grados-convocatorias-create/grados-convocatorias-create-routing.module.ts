import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradosConvocatoriasCreatePage } from './grados-convocatorias-create.page';

const routes: Routes = [
  {
    path: '',
    component: GradosConvocatoriasCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradosConvocatoriasCreatePageRoutingModule {}
