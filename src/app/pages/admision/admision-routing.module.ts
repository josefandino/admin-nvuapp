import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmisionPage } from './admision.page';

const routes: Routes = [
  {
    path: '',
    component: AdmisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmisionPageRoutingModule {}
