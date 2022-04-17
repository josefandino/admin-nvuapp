import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSchoolYearPageRoutingModule } from './edit-school-year-routing.module';

import { EditSchoolYearPage } from './edit-school-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSchoolYearPageRoutingModule
  ],
  declarations: [EditSchoolYearPage]
})
export class EditSchoolYearPageModule {}
