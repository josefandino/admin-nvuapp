import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantillasCartasMemosPage } from './pantillas-cartas-memos.page';

const routes: Routes = [
  {
    path: '',
    component: PantillasCartasMemosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantillasCartasMemosPageRoutingModule {}
