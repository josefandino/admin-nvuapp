import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasPageRoutingModule } from './notas-routing.module';

import { NotasPage } from './notas.page';
import { LayoutsModule } from './../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasPageRoutingModule,
    LayoutsModule
  ],
  declarations: [NotasPage]
})
export class NotasPageModule {}
