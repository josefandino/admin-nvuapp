import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSectionPageRoutingModule } from './create-section-routing.module';
import { LayoutsModule } from './../../../../inc/layouts/layouts.module';

import { CreateSectionPage } from './create-section.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSectionPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CreateSectionPage]
})
export class CreateSectionPageModule {}
