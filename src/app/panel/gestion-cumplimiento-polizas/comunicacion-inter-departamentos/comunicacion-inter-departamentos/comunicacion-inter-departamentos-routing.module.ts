import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicacionInterDepartamentosPage } from './comunicacion-inter-departamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicacionInterDepartamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicacionInterDepartamentosPageRoutingModule {}
