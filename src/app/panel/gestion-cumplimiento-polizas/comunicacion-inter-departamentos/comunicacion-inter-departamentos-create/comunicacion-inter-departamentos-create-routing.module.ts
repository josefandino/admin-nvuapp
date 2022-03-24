import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicacionInterDepartamentosCreatePage } from './comunicacion-inter-departamentos-create.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicacionInterDepartamentosCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicacionInterDepartamentosCreatePageRoutingModule {}
