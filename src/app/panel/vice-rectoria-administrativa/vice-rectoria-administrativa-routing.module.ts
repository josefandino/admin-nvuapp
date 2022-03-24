import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViceRectoriaAdministrativaPage } from './vice-rectoria-administrativa.page';

const routes: Routes = [
  {
    path: '',
    component: ViceRectoriaAdministrativaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViceRectoriaAdministrativaPageRoutingModule {}
