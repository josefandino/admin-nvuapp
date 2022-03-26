import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAsignaturaPage } from './edit-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: EditAsignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAsignaturaPageRoutingModule {}
