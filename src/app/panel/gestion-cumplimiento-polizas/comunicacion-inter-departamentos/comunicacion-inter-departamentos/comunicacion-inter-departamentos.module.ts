import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicacionInterDepartamentosPageRoutingModule } from './comunicacion-inter-departamentos-routing.module';

import { ComunicacionInterDepartamentosPage } from './comunicacion-inter-departamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicacionInterDepartamentosPageRoutingModule
  ],
  declarations: [ComunicacionInterDepartamentosPage]
})
export class ComunicacionInterDepartamentosPageModule {}
