import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCumplimientoPolizasPage } from './gestion-cumplimiento-polizas.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCumplimientoPolizasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCumplimientoPolizasPageRoutingModule {}
