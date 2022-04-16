import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuerpoDocentePageRoutingModule } from './cuerpo-docente-routing.module';
import { LayoutsModule } from './../../../inc/layouts/layouts.module';

import { CuerpoDocentePage } from './cuerpo-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuerpoDocentePageRoutingModule,
    LayoutsModule
  ],
  declarations: [CuerpoDocentePage]
})
export class CuerpoDocentePageModule {}
