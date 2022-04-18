import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupStudentsEditPage } from './group-students-edit.page';

const routes: Routes = [
  {
    path: '',
    component: GroupStudentsEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupStudentsEditPageRoutingModule {}
