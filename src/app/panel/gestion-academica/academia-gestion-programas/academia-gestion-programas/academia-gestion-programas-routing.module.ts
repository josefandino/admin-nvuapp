import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademiaGestionProgramasPage } from './academia-gestion-programas.page';

const routes: Routes = [
  {
    path: '',
    component: AcademiaGestionProgramasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademiaGestionProgramasPageRoutingModule {}
