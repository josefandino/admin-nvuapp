import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresupuestoFinancieroPageRoutingModule } from './presupuesto-financiero-routing.module';

import { PresupuestoFinancieroPage } from './presupuesto-financiero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresupuestoFinancieroPageRoutingModule
  ],
  declarations: [PresupuestoFinancieroPage]
})
export class PresupuestoFinancieroPageModule {}
