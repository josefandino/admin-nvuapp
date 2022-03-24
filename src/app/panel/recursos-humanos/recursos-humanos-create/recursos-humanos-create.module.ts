import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursosHumanosCreatePageRoutingModule } from './recursos-humanos-create-routing.module';

import { RecursosHumanosCreatePage } from './recursos-humanos-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecursosHumanosCreatePageRoutingModule
  ],
  declarations: [RecursosHumanosCreatePage]
})
export class RecursosHumanosCreatePageModule {}
