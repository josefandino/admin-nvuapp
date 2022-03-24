import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCumplimientoPolizasCreatePageRoutingModule } from './gestion-cumplimiento-polizas-create-routing.module';

import { GestionCumplimientoPolizasCreatePage } from './gestion-cumplimiento-polizas-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCumplimientoPolizasCreatePageRoutingModule
  ],
  declarations: [GestionCumplimientoPolizasCreatePage]
})
export class GestionCumplimientoPolizasCreatePageModule {}
