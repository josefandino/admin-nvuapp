import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCicloAcademicoPage } from './create-ciclo-academico.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCicloAcademicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCicloAcademicoPageRoutingModule {}
