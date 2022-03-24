import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReglamentosRegulacionesPageRoutingModule } from './reglamentos-regulaciones-routing.module';

import { ReglamentosRegulacionesPage } from './reglamentos-regulaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReglamentosRegulacionesPageRoutingModule
  ],
  declarations: [ReglamentosRegulacionesPage]
})
export class ReglamentosRegulacionesPageModule {}
