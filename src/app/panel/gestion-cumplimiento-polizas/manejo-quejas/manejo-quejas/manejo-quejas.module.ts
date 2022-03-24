import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManejoQuejasPageRoutingModule } from './manejo-quejas-routing.module';

import { ManejoQuejasPage } from './manejo-quejas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManejoQuejasPageRoutingModule
  ],
  declarations: [ManejoQuejasPage]
})
export class ManejoQuejasPageModule {}
