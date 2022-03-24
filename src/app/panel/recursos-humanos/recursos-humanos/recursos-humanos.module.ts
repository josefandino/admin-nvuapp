import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursosHumanosPageRoutingModule } from './recursos-humanos-routing.module';

import { RecursosHumanosPage } from './recursos-humanos.page';

import { LayoutsModule } from './../../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecursosHumanosPageRoutingModule,
    LayoutsModule
  ],
  declarations: [RecursosHumanosPage]
})
export class RecursosHumanosPageModule {}
