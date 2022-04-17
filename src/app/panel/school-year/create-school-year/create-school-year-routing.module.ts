import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSchoolYearPage } from './create-school-year.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSchoolYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSchoolYearPageRoutingModule {}
