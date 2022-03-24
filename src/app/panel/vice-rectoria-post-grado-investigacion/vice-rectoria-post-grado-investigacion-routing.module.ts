import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViceRectoriaPostGradoInvestigacionPage } from './vice-rectoria-post-grado-investigacion.page';

const routes: Routes = [
  {
    path: '',
    component: ViceRectoriaPostGradoInvestigacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViceRectoriaPostGradoInvestigacionPageRoutingModule {}
