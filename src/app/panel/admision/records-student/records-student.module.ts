import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordsStudentPageRoutingModule } from './records-student-routing.module';

import { RecordsStudentPage } from './records-student.page';

import { LayoutsModule } from '../../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordsStudentPageRoutingModule,
    LayoutsModule
  ],
  declarations: [RecordsStudentPage]
})
export class RecordsStudentPageModule {}
