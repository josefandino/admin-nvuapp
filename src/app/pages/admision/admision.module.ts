import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmisionPageRoutingModule } from './admision-routing.module';

import { AdmisionPage } from './admision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmisionPageRoutingModule
  ],
  declarations: [AdmisionPage]
})
export class AdmisionPageModule {}
