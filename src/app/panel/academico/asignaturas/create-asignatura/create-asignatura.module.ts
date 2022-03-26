import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAsignaturaPageRoutingModule } from './create-asignatura-routing.module';

import { CreateAsignaturaPage } from './create-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAsignaturaPageRoutingModule
  ],
  declarations: [CreateAsignaturaPage]
})
export class CreateAsignaturaPageModule {}
