import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUniversitarioCreatePageRoutingModule } from './registro-universitario-create-routing.module';

import { RegistroUniversitarioCreatePage } from './registro-universitario-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUniversitarioCreatePageRoutingModule
  ],
  declarations: [RegistroUniversitarioCreatePage]
})
export class RegistroUniversitarioCreatePageModule {}
