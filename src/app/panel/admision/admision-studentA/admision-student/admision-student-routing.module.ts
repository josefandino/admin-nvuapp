import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmisionStudentPage } from './admision-student.page';

const routes: Routes = [
  {
    path: '',
    component: AdmisionStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmisionStudentPageRoutingModule {}
