import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from '../../../../inc/layouts/layouts.module';

import { CreateCarrerasPageRoutingModule } from './create-carreras-routing.module';

import { CreateCarrerasPage } from './create-carreras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCarrerasPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CreateCarrerasPage]
})
export class CreateCarrerasPageModule {}
