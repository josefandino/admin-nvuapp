import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAsignaturaPage } from './create-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAsignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAsignaturaPageRoutingModule {}
