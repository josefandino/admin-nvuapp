import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from 'src/app/inc/layouts/layouts.module';

import { CreateCicloAcademicoPageRoutingModule } from './create-ciclo-academico-routing.module';

import { CreateCicloAcademicoPage } from './create-ciclo-academico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCicloAcademicoPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CreateCicloAcademicoPage]
})
export class CreateCicloAcademicoPageModule {}
