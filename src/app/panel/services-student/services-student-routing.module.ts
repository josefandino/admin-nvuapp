import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesStudentPage } from './services-student.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesStudentPageRoutingModule {}
