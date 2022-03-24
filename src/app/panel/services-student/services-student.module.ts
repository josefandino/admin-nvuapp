import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from './../../inc/layouts/layouts.module';

import { ServicesStudentPageRoutingModule } from './services-student-routing.module';

import { ServicesStudentPage } from './services-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesStudentPageRoutingModule,
    LayoutsModule
  ],
  declarations: [ServicesStudentPage]
})
export class ServicesStudentPageModule {}
