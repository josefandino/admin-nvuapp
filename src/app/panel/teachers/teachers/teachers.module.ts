import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachersPageRoutingModule } from './teachers-routing.module';

import { TeachersPage } from './teachers.page';
import { LayoutsModule } from 'src/app/inc/layouts/layouts.module';

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
