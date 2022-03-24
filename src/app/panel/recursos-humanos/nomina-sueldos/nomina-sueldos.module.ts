import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominaSueldosPageRoutingModule } from './nomina-sueldos-routing.module';

import { NominaSueldosPage } from './nomina-sueldos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NominaSueldosPageRoutingModule
  ],
  declarations: [NominaSueldosPage]
})
export class NominaSueldosPageModule {}
