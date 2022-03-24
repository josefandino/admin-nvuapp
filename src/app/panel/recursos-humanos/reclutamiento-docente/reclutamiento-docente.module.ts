import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclutamientoDocentePageRoutingModule } from './reclutamiento-docente-routing.module';

import { ReclutamientoDocentePage } from './reclutamiento-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclutamientoDocentePageRoutingModule
  ],
  declarations: [ReclutamientoDocentePage]
})
export class ReclutamientoDocentePageModule {}
