import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionPageRoutingModule } from './section-routing.module';
import { LayoutsModule } from './../../../../inc/layouts/layouts.module';

import { SectionPage } from './section.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionPageRoutingModule,
    LayoutsModule
  ],
  declarations: [SectionPage]
})
export class SectionPageModule {}
