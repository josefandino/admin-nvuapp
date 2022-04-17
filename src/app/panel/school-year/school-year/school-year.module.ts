import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolYearPageRoutingModule } from './school-year-routing.module';

import { SchoolYearPage } from './school-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolYearPageRoutingModule
  ],
  declarations: [SchoolYearPage]
})
export class SchoolYearPageModule {}
