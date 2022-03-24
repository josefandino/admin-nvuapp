import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademiaGestionProgramasCreatePage } from './academia-gestion-programas-create.page';

const routes: Routes = [
  {
    path: '',
    component: AcademiaGestionProgramasCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademiaGestionProgramasCreatePageRoutingModule {}
