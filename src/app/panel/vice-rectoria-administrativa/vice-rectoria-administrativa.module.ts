import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViceRectoriaAdministrativaPageRoutingModule } from './vice-rectoria-administrativa-routing.module';

import { ViceRectoriaAdministrativaPage } from './vice-rectoria-administrativa.page';

import { LayoutsModule } from './../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViceRectoriaAdministrativaPageRoutingModule,
    LayoutsModule
  ],
  declarations: [ViceRectoriaAdministrativaPage]
})
export class ViceRectoriaAdministrativaPageModule {}
