import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamenesEvaluacionesCreatePageRoutingModule } from './examenes-evaluaciones-create-routing.module';

import { ExamenesEvaluacionesCreatePage } from './examenes-evaluaciones-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenesEvaluacionesCreatePageRoutingModule
  ],
  declarations: [ExamenesEvaluacionesCreatePage]
})
export class ExamenesEvaluacionesCreatePageModule {}
