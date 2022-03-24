import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionAppPage } from './revision-app.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionAppPageRoutingModule {}
