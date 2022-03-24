import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademiaGestionProgramasCreatePageRoutingModule } from './academia-gestion-programas-create-routing.module';

import { AcademiaGestionProgramasCreatePage } from './academia-gestion-programas-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademiaGestionProgramasCreatePageRoutingModule
  ],
  declarations: [AcademiaGestionProgramasCreatePage]
})
export class AcademiaGestionProgramasCreatePageModule {}
