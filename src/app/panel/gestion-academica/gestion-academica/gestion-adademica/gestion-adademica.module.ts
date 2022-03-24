import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from './../../../../inc/layouts/layouts.module';

import { GestionAdademicaPageRoutingModule } from './gestion-adademica-routing.module';

import { GestionAdademicaPage } from './gestion-adademica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionAdademicaPageRoutingModule,
    LayoutsModule
  ],
  declarations: [GestionAdademicaPage]
})
export class GestionAdademicaPageModule {}
