import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloAcademicoPage } from './ciclo-academico.page';

const routes: Routes = [
  {
    path: '',
    component: CicloAcademicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CicloAcademicoPageRoutingModule {}
