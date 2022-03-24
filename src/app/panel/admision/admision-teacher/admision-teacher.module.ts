import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmisionTeacherPageRoutingModule } from './admision-teacher-routing.module';

import { AdmisionTeacherPage } from './admision-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmisionTeacherPageRoutingModule
  ],
  declarations: [AdmisionTeacherPage]
})
export class AdmisionTeacherPageModule {}
