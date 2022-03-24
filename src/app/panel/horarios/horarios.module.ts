import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorariosPageRoutingModule } from './horarios-routing.module';

import { HorariosPage } from './horarios.page';
import { LayoutsModule } from './../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorariosPageRoutingModule,
    LayoutsModule
  ],
  declarations: [HorariosPage]
})
export class HorariosPageModule {}