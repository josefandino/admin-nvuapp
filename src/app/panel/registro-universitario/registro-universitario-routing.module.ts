import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUniversitarioPage } from './registro-universitario.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroUniversitarioPage
  },
  {
    path: 'registro-universitario',
    loadChildren: () => import('./registro-universitario/registro-universitario.module').then( m => m.RegistroUniversitarioPageModule)
  },
  {
    path: 'registro-universitario-create',
    loadChildren: () => import('./registro-universitario-create/registro-universitario-create.module').then( m => m.RegistroUniversitarioCreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroUniversitarioPageRoutingModule {}
