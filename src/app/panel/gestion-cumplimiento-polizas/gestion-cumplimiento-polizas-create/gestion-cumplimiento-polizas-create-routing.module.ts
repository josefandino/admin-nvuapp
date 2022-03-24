import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCumplimientoPolizasCreatePage } from './gestion-cumplimiento-polizas-create.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCumplimientoPolizasCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCumplimientoPolizasCreatePageRoutingModule {}
