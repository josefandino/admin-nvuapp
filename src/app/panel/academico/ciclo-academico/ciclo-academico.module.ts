import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from 'src/app/inc/layouts/layouts.module';

import { CicloAcademicoPageRoutingModule } from './ciclo-academico-routing.module';

import { CicloAcademicoPage } from './ciclo-academico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CicloAcademicoPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CicloAcademicoPage]
})
export class CicloAcademicoPageModule {}
