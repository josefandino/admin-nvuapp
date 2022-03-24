import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioEntretenimientoPageRoutingModule } from './calendario-entretenimiento-routing.module';

import { CalendarioEntretenimientoPage } from './calendario-entretenimiento.page';

import { LayoutsModule } from './../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioEntretenimientoPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CalendarioEntretenimientoPage]
})
export class CalendarioEntretenimientoPageModule {}
