import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManejoActivosPageRoutingModule } from './manejo-activos-routing.module';

import { ManejoActivosPage } from './manejo-activos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManejoActivosPageRoutingModule
  ],
  declarations: [ManejoActivosPage]
})
export class ManejoActivosPageModule {}
