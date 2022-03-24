import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditStudentsPage } from './edit-students.page';

const routes: Routes = [
  {
    path: '',
    component: EditStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditStudentsPageRoutingModule {}
