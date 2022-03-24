import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCoursesPage } from './edit-courses.page';

const routes: Routes = [
  {
    path: '',
    component: EditCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCoursesPageRoutingModule {}
