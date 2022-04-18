import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupStudentsPage } from './group-students.page';

const routes: Routes = [
  {
    path: '',
    component: GroupStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupStudentsPageRoutingModule {}
