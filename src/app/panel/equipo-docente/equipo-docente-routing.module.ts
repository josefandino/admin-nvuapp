import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipoDocentePage } from './equipo-docente.page';

const routes: Routes = [
  {
    path: '',
    component: EquipoDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipoDocentePageRoutingModule {}
