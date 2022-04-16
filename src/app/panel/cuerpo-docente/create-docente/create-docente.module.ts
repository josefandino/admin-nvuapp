import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from './../../../inc/layouts/layouts.module';

import { CreateDocentePageRoutingModule } from './create-docente-routing.module';

import { CreateDocentePage } from './create-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDocentePageRoutingModule,
    LayoutsModule
  ],
  declarations: [CreateDocentePage]
})
export class CreateDocentePageModule {}
