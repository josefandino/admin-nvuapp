import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolizasSeguridadPageRoutingModule } from './polizas-seguridad-routing.module';

import { PolizasSeguridadPage } from './polizas-seguridad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolizasSeguridadPageRoutingModule
  ],
  declarations: [PolizasSeguridadPage]
})
export class PolizasSeguridadPageModule {}
