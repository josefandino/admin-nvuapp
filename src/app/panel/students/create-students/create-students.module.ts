import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateStudentsPageRoutingModule } from './create-students-routing.module';

import { CreateStudentsPage } from './create-students.page';
import { LayoutsModule } from 'src/app/inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateStudentsPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CreateStudentsPage]
})
export class CreateStudentsPageModule {}
