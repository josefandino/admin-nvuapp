import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from './../../../inc/layouts/layouts.module';

import { CreateSchoolYearPageRoutingModule } from './create-school-year-routing.module';

import { CreateSchoolYearPage } from './create-school-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSchoolYearPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CreateSchoolYearPage]
})
export class CreateSchoolYearPageModule {}
