import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolYearPage } from './school-year.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolYearPageRoutingModule {}
