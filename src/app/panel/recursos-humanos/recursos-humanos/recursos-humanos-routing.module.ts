import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursosHumanosPage } from './recursos-humanos.page';

const routes: Routes = [
  {
    path: '',
    component: RecursosHumanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursosHumanosPageRoutingModule {}
