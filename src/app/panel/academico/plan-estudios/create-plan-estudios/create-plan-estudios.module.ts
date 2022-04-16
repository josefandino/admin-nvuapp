import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from './../../../../inc/layouts/layouts.module';

import { CreatePlanEstudiosPageRoutingModule } from './create-plan-estudios-routing.module';

import { CreatePlanEstudiosPage } from './create-plan-estudios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePlanEstudiosPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CreatePlanEstudiosPage]
})
export class CreatePlanEstudiosPageModule {}
