import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from './../../../inc/layouts/layouts.module';

import { GroupStudentsPageRoutingModule } from './group-students-routing.module';

import { GroupStudentsPage } from './group-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupStudentsPageRoutingModule,
    LayoutsModule
  ],
  declarations: [GroupStudentsPage]
})
export class GroupStudentsPageModule {}
