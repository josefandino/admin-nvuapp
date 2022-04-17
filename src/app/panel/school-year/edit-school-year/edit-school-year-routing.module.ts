import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSchoolYearPage } from './edit-school-year.page';

const routes: Routes = [
  {
    path: '',
    component: EditSchoolYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSchoolYearPageRoutingModule {}
