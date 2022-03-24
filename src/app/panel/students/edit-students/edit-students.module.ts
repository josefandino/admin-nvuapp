import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditStudentsPageRoutingModule } from './edit-students-routing.module';

import { EditStudentsPage } from './edit-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditStudentsPageRoutingModule
  ],
  declarations: [EditStudentsPage]
})
export class EditStudentsPageModule {}
