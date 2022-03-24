import { LayoutsModule } from './../../inc/layouts/layouts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelAdmisionPageRoutingModule } from './panel-admision-routing.module';

import { PanelAdmisionPage } from './panel-admision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelAdmisionPageRoutingModule,
    LayoutsModule
  ],
  declarations: [PanelAdmisionPage]
})
export class PanelAdmisionPageModule {}
