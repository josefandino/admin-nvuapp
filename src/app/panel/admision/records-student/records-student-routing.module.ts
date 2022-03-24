import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordsStudentPage } from './records-student.page';

const routes: Routes = [
  {
    path: '',
    component: RecordsStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordsStudentPageRoutingModule {}
