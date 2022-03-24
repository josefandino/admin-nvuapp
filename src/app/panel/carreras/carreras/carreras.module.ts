import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrerasPageRoutingModule } from './carreras-routing.module';
import { LayoutsModule } from './../../../inc/layouts/layouts.module';

import { CarrerasPage } from './carreras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrerasPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CarrerasPage]
})
export class CarrerasPageModule {}
