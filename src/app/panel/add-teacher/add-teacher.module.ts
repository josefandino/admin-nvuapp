import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutsModule } from './../../inc/layouts/layouts.module';

import { AddTeacherPageRoutingModule } from './add-teacher-routing.module';

import { AddTeacherPage } from './add-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTeacherPageRoutingModule,
    LayoutsModule
  ],
  declarations: [AddTeacherPage]
})
export class AddTeacherPageModule {}
