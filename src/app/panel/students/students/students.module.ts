import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentsPageRoutingModule } from './students-routing.module';

import { StudentsPage } from './students.page';

import { LayoutsModule } from './../../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentsPageRoutingModule,
    LayoutsModule
  ],
  declarations: [StudentsPage]
})
export class StudentsPageModule {}
