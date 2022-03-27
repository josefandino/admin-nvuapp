import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPlanEstudiosPageRoutingModule } from './edit-plan-estudios-routing.module';

import { EditPlanEstudiosPage } from './edit-plan-estudios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPlanEstudiosPageRoutingModule
  ],
  declarations: [EditPlanEstudiosPage]
})
export class EditPlanEstudiosPageModule {}
