import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutsModule } from './../../inc/layouts/layouts.module';
import { TeachersPageRoutingModule } from './teachers-routing.module';

import { TeachersPage } from './teachers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeachersPageRoutingModule,
    LayoutsModule
  ],
  declarations: [TeachersPage]
})
export class TeachersPageModule {}
