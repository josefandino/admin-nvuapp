import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from 'src/app/inc/layouts/layouts.module';

import { CreateNewsPageRoutingModule } from './create-news-routing.module';

import { CreateNewsPage } from './create-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewsPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CreateNewsPage]
})
export class CreateNewsPageModule {}
