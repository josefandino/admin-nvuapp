import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViceRectoriaAcademicaPageRoutingModule } from './vice-rectoria-academica-routing.module';

import { ViceRectoriaAcademicaPage } from './vice-rectoria-academica.page';

import { LayoutsModule } from './../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViceRectoriaAcademicaPageRoutingModule,
    LayoutsModule
  ],
  declarations: [ViceRectoriaAcademicaPage]
})
export class ViceRectoriaAcademicaPageModule {}
