import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionAdademicaPage } from './gestion-adademica.page';

const routes: Routes = [
  {
    path: '',
    component: GestionAdademicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionAdademicaPageRoutingModule {}
