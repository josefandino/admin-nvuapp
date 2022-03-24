import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManejoQuejasCreatePageRoutingModule } from './manejo-quejas-create-routing.module';

import { ManejoQuejasCreatePage } from './manejo-quejas-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManejoQuejasCreatePageRoutingModule
  ],
  declarations: [ManejoQuejasCreatePage]
})
export class ManejoQuejasCreatePageModule {}
