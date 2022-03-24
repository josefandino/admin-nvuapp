import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManejoQuejasCreatePage } from './manejo-quejas-create.page';

const routes: Routes = [
  {
    path: '',
    component: ManejoQuejasCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManejoQuejasCreatePageRoutingModule {}
