import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSectionPage } from './edit-section.page';

const routes: Routes = [
  {
    path: '',
    component: EditSectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSectionPageRoutingModule {}
