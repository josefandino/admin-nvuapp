import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademicoPageRoutingModule } from './academico-routing.module';

import { AcademicoPage } from './academico.page';
import { LayoutsModule } from 'src/app/inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademicoPageRoutingModule,
    LayoutsModule
  ],
  declarations: [AcademicoPage]
})
export class AcademicoPageModule {}
