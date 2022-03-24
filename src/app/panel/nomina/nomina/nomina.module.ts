import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominaPageRoutingModule } from './nomina-routing.module';

import { NominaPage } from './nomina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NominaPageRoutingModule
  ],
  declarations: [NominaPage]
})
export class NominaPageModule {}
