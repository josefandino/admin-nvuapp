import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupStudentsEditPageRoutingModule } from './group-students-edit-routing.module';

import { GroupStudentsEditPage } from './group-students-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupStudentsEditPageRoutingModule
  ],
  declarations: [GroupStudentsEditPage]
})
export class GroupStudentsEditPageModule {}
