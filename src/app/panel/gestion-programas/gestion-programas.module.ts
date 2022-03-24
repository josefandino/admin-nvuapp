import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionProgramasPageRoutingModule } from './gestion-programas-routing.module';

import { GestionProgramasPage } from './gestion-programas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionProgramasPageRoutingModule
  ],
  declarations: [GestionProgramasPage]
})
export class GestionProgramasPageModule {}
