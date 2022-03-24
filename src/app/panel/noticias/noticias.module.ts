import { LayoutsModule } from './../../inc/layouts/layouts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasPageRoutingModule } from './noticias-routing.module';

import { NoticiasPage } from './noticias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasPageRoutingModule,
    LayoutsModule
  ],
  declarations: [NoticiasPage]
})
export class NoticiasPageModule {}
