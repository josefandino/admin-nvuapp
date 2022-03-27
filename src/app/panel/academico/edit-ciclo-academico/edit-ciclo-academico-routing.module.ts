import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCicloAcademicoPage } from './edit-ciclo-academico.page';

const routes: Routes = [
  {
    path: '',
    component: EditCicloAcademicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCicloAcademicoPageRoutingModule {}
