import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradosConvocatoriasCreatePageRoutingModule } from './grados-convocatorias-create-routing.module';

import { GradosConvocatoriasCreatePage } from './grados-convocatorias-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradosConvocatoriasCreatePageRoutingModule
  ],
  declarations: [GradosConvocatoriasCreatePage]
})
export class GradosConvocatoriasCreatePageModule {}
