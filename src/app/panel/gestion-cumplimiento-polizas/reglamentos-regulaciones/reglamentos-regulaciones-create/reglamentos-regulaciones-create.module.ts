import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReglamentosRegulacionesCreatePageRoutingModule } from './reglamentos-regulaciones-create-routing.module';

import { ReglamentosRegulacionesCreatePage } from './reglamentos-regulaciones-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReglamentosRegulacionesCreatePageRoutingModule
  ],
  declarations: [ReglamentosRegulacionesCreatePage]
})
export class ReglamentosRegulacionesCreatePageModule {}
