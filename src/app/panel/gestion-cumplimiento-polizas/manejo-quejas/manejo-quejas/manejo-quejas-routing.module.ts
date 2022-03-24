import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManejoQuejasPage } from './manejo-quejas.page';

const routes: Routes = [
  {
    path: '',
    component: ManejoQuejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManejoQuejasPageRoutingModule {}
