import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamenesEvaluacionesPageRoutingModule } from './examenes-evaluaciones-routing.module';

import { ExamenesEvaluacionesPage } from './examenes-evaluaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenesEvaluacionesPageRoutingModule
  ],
  declarations: [ExamenesEvaluacionesPage]
})
export class ExamenesEvaluacionesPageModule {}
