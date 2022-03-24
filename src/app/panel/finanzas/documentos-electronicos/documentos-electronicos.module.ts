import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentosElectronicosPageRoutingModule } from './documentos-electronicos-routing.module';

import { DocumentosElectronicosPage } from './documentos-electronicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentosElectronicosPageRoutingModule
  ],
  declarations: [DocumentosElectronicosPage]
})
export class DocumentosElectronicosPageModule {}
