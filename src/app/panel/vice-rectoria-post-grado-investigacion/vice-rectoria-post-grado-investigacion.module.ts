import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViceRectoriaPostGradoInvestigacionPageRoutingModule } from './vice-rectoria-post-grado-investigacion-routing.module';

import { ViceRectoriaPostGradoInvestigacionPage } from './vice-rectoria-post-grado-investigacion.page';

import { LayoutsModule } from './../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViceRectoriaPostGradoInvestigacionPageRoutingModule,
    LayoutsModule
  ],
  declarations: [ViceRectoriaPostGradoInvestigacionPage]
})
export class ViceRectoriaPostGradoInvestigacionPageModule {}
