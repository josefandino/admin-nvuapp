import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCarrerasPage } from './edit-carreras.page';

const routes: Routes = [
  {
    path: '',
    component: EditCarrerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCarrerasPageRoutingModule {}
