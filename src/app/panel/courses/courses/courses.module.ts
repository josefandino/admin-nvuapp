import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from './../../../inc/layouts/layouts.module';

import { CoursesPageRoutingModule } from './courses-routing.module';

import { CoursesPage } from './courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CoursesPage]
})
export class CoursesPageModule {}
