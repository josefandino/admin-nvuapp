import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { AddTeacherPageRoutingModule } from './add-teacher-routing.module';

import { AddTeacherPage } from './add-teacher.page';
import { LayoutsModule } from 'src/app/inc/layouts/layouts.module';

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
