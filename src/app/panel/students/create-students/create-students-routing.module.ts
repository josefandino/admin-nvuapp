import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateStudentsPage } from './create-students.page';

const routes: Routes = [
  {
    path: '',
    component: CreateStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateStudentsPageRoutingModule {}
