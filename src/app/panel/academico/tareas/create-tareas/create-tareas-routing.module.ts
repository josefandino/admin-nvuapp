import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTareasPage } from './create-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTareasPageRoutingModule {}
