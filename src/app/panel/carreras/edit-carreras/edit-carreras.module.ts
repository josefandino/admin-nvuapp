import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCarrerasPageRoutingModule } from './edit-carreras-routing.module';

import { EditCarrerasPage } from './edit-carreras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCarrerasPageRoutingModule
  ],
  declarations: [EditCarrerasPage]
})
export class EditCarrerasPageModule {}
