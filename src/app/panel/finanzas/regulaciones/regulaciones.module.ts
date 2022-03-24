import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegulacionesPageRoutingModule } from './regulaciones-routing.module';

import { RegulacionesPage } from './regulaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegulacionesPageRoutingModule
  ],
  declarations: [RegulacionesPage]
})
export class RegulacionesPageModule {}
