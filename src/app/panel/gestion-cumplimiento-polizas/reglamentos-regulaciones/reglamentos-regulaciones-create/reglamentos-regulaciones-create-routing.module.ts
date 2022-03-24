import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReglamentosRegulacionesCreatePage } from './reglamentos-regulaciones-create.page';

const routes: Routes = [
  {
    path: '',
    component: ReglamentosRegulacionesCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReglamentosRegulacionesCreatePageRoutingModule {}
