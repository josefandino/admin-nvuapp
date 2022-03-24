import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsociacionAlumonsPageRoutingModule } from './asociacion-alumons-routing.module';

import { AsociacionAlumonsPage } from './asociacion-alumons.page';

import { LayoutsModule } from './../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsociacionAlumonsPageRoutingModule,
    LayoutsModule
  ],
  declarations: [AsociacionAlumonsPage]
})
export class AsociacionAlumonsPageModule {}
