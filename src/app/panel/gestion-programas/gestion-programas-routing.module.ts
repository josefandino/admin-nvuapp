import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionProgramasPage } from './gestion-programas.page';

const routes: Routes = [
  {
    path: '',
    component: GestionProgramasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionProgramasPageRoutingModule {}
