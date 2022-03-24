import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagosPageRoutingModule } from './pagos-routing.module';

import { PagosPage } from './pagos.page';
import { LayoutsModule } from './../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagosPageRoutingModule,
    LayoutsModule
  ],
  declarations: [PagosPage]
})
export class PagosPageModule {}
