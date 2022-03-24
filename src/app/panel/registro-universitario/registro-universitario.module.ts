import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUniversitarioPageRoutingModule } from './registro-universitario-routing.module';

import { RegistroUniversitarioPage } from './registro-universitario.page';

import { LayoutsModule } from './../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUniversitarioPageRoutingModule,
    LayoutsModule
  ],
  declarations: [RegistroUniversitarioPage]
})
export class RegistroUniversitarioPageModule {}
