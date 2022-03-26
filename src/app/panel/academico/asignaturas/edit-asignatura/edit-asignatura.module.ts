import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAsignaturaPageRoutingModule } from './edit-asignatura-routing.module';

import { EditAsignaturaPage } from './edit-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAsignaturaPageRoutingModule
  ],
  declarations: [EditAsignaturaPage]
})
export class EditAsignaturaPageModule {}
