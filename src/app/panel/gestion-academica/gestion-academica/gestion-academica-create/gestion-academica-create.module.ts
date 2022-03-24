import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionAcademicaCreatePageRoutingModule } from './gestion-academica-create-routing.module';

import { GestionAcademicaCreatePage } from './gestion-academica-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionAcademicaCreatePageRoutingModule
  ],
  declarations: [GestionAcademicaCreatePage]
})
export class GestionAcademicaCreatePageModule {}
