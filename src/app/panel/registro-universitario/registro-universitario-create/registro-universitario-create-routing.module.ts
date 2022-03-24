import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUniversitarioCreatePage } from './registro-universitario-create.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroUniversitarioCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroUniversitarioCreatePageRoutingModule {}
