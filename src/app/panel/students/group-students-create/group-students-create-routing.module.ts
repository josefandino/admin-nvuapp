import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupStudentsCreatePage } from './group-students-create.page';

const routes: Routes = [
  {
    path: '',
    component: GroupStudentsCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupStudentsCreatePageRoutingModule {}
