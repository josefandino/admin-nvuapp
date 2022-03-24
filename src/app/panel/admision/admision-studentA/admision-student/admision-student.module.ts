import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmisionStudentPageRoutingModule } from './admision-student-routing.module';

import { AdmisionStudentPage } from './admision-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmisionStudentPageRoutingModule
  ],
  declarations: [AdmisionStudentPage]
})
export class AdmisionStudentPageModule {}
