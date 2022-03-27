import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePlanEstudiosPageRoutingModule } from './create-plan-estudios-routing.module';

import { CreatePlanEstudiosPage } from './create-plan-estudios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePlanEstudiosPageRoutingModule
  ],
  declarations: [CreatePlanEstudiosPage]
})
export class CreatePlanEstudiosPageModule {}
