import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanzasContabilidadPageRoutingModule } from './finanzas-contabilidad-routing.module';

import { FinanzasContabilidadPage } from './finanzas-contabilidad.page';

import { LayoutsModule } from './../../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanzasContabilidadPageRoutingModule,
    LayoutsModule
  ],
  declarations: [FinanzasContabilidadPage]
})
export class FinanzasContabilidadPageModule {}
