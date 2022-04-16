import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSectionPage } from './create-section.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSectionPageRoutingModule {}
