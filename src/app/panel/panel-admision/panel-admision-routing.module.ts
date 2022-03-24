import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelAdmisionPage } from './panel-admision.page';

const routes: Routes = [
  {
    path: '',
    component: PanelAdmisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelAdmisionPageRoutingModule {}
