import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipoDocentePageRoutingModule } from './equipo-docente-routing.module';

import { EquipoDocentePage } from './equipo-docente.page';

import { LayoutsModule } from './../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipoDocentePageRoutingModule,
    LayoutsModule
  ],
  declarations: [EquipoDocentePage]
})
export class EquipoDocentePageModule {}
