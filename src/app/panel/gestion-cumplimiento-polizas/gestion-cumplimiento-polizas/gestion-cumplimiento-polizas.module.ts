import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCumplimientoPolizasPageRoutingModule } from './gestion-cumplimiento-polizas-routing.module';

import { GestionCumplimientoPolizasPage } from './gestion-cumplimiento-polizas.page';

import { LayoutsModule } from './../../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCumplimientoPolizasPageRoutingModule,
    LayoutsModule
  ],
  declarations: [GestionCumplimientoPolizasPage]
})
export class GestionCumplimientoPolizasPageModule {}
