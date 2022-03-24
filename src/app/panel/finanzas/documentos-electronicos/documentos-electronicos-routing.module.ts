import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentosElectronicosPage } from './documentos-electronicos.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentosElectronicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentosElectronicosPageRoutingModule {}
