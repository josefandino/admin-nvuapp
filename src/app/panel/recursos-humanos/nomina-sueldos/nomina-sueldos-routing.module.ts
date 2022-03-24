import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NominaSueldosPage } from './nomina-sueldos.page';

const routes: Routes = [
  {
    path: '',
    component: NominaSueldosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NominaSueldosPageRoutingModule {}
