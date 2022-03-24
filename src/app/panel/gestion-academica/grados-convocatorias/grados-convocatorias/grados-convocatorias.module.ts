import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradosConvocatoriasPageRoutingModule } from './grados-convocatorias-routing.module';

import { GradosConvocatoriasPage } from './grados-convocatorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradosConvocatoriasPageRoutingModule
  ],
  declarations: [GradosConvocatoriasPage]
})
export class GradosConvocatoriasPageModule {}
