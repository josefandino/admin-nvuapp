import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicacionInterDepartamentosCreatePageRoutingModule } from './comunicacion-inter-departamentos-create-routing.module';

import { ComunicacionInterDepartamentosCreatePage } from './comunicacion-inter-departamentos-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicacionInterDepartamentosCreatePageRoutingModule
  ],
  declarations: [ComunicacionInterDepartamentosCreatePage]
})
export class ComunicacionInterDepartamentosCreatePageModule {}
