import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from 'src/app/inc/layouts/layouts.module';

import { EditCicloAcademicoPageRoutingModule } from './edit-ciclo-academico-routing.module';

import { EditCicloAcademicoPage } from './edit-ciclo-academico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCicloAcademicoPageRoutingModule,
    LayoutsModule
  ],
  declarations: [EditCicloAcademicoPage]
})
export class EditCicloAcademicoPageModule {}
