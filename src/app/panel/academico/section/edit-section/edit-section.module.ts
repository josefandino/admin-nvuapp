import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSectionPageRoutingModule } from './edit-section-routing.module';

import { EditSectionPage } from './edit-section.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSectionPageRoutingModule
  ],
  declarations: [EditSectionPage]
})
export class EditSectionPageModule {}
