import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCoursesPageRoutingModule } from './edit-courses-routing.module';

import { EditCoursesPage } from './edit-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCoursesPageRoutingModule
  ],
  declarations: [EditCoursesPage]
})
export class EditCoursesPageModule {}
