import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from './../../../inc/layouts/layouts.module';

import { GroupStudentsCreatePageRoutingModule } from './group-students-create-routing.module';

import { GroupStudentsCreatePage } from './group-students-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupStudentsCreatePageRoutingModule,
    LayoutsModule
  ],
  declarations: [GroupStudentsCreatePage]
})
export class GroupStudentsCreatePageModule {}
