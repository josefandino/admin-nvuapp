import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManejoActivosPage } from './manejo-activos.page';

const routes: Routes = [
  {
    path: '',
    component: ManejoActivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManejoActivosPageRoutingModule {}
