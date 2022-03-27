import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from 'src/app/inc/layouts/layouts.module';

import { EditNewsPageRoutingModule } from './edit-news-routing.module';

import { EditNewsPage } from './edit-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditNewsPageRoutingModule,
    LayoutsModule
  ],
  declarations: [EditNewsPage]
})
export class EditNewsPageModule {}
