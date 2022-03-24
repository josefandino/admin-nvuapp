import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantillasCartasMemosPageRoutingModule } from './pantillas-cartas-memos-routing.module';

import { PantillasCartasMemosPage } from './pantillas-cartas-memos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantillasCartasMemosPageRoutingModule
  ],
  declarations: [PantillasCartasMemosPage]
})
export class PantillasCartasMemosPageModule {}
