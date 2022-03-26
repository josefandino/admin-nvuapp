import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from './../../../../inc/layouts/layouts.module';

import { IonicModule } from '@ionic/angular';

import { CreateAsignaturaPageRoutingModule } from './create-asignatura-routing.module';

import { CreateAsignaturaPage } from './create-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAsignaturaPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CreateAsignaturaPage]
})
export class CreateAsignaturaPageModule {}
