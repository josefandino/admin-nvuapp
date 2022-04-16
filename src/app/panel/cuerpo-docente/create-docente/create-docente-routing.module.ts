import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDocentePage } from './create-docente.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDocentePageRoutingModule {}
