import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanzasContabilidadPage } from './finanzas-contabilidad.page';

const routes: Routes = [
  {
    path: '',
    component: FinanzasContabilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanzasContabilidadPageRoutingModule {}
