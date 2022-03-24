import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioEntretenimientoPage } from './calendario-entretenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioEntretenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioEntretenimientoPageRoutingModule {}
