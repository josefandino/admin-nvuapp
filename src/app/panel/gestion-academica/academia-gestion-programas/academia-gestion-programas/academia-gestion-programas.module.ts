import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademiaGestionProgramasPageRoutingModule } from './academia-gestion-programas-routing.module';

import { AcademiaGestionProgramasPage } from './academia-gestion-programas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademiaGestionProgramasPageRoutingModule
  ],
  declarations: [AcademiaGestionProgramasPage]
})
export class AcademiaGestionProgramasPageModule {}
