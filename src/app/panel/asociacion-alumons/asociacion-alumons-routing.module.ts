import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsociacionAlumonsPage } from './asociacion-alumons.page';

const routes: Routes = [
  {
    path: '',
    component: AsociacionAlumonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsociacionAlumonsPageRoutingModule {}
