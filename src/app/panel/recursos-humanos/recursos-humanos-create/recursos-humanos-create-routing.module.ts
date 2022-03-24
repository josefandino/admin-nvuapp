import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursosHumanosCreatePage } from './recursos-humanos-create.page';

const routes: Routes = [
  {
    path: '',
    component: RecursosHumanosCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursosHumanosCreatePageRoutingModule {}
