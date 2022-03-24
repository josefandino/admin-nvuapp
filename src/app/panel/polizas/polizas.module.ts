import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolizasPageRoutingModule } from './polizas-routing.module';

import { PolizasPage } from './polizas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolizasPageRoutingModule
  ],
  declarations: [PolizasPage]
})
export class PolizasPageModule {}
