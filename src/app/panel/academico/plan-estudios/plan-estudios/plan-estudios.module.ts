import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from 'src/app/inc/layouts/layouts.module';

import { PlanEstudiosPageRoutingModule } from './plan-estudios-routing.module';

import { PlanEstudiosPage } from './plan-estudios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanEstudiosPageRoutingModule,
    LayoutsModule
  ],
  declarations: [PlanEstudiosPage]
})
export class PlanEstudiosPageModule {}
