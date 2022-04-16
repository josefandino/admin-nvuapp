import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuerpoDocentePage } from './cuerpo-docente.page';

const routes: Routes = [
  {
    path: '',
    component: CuerpoDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuerpoDocentePageRoutingModule {}
