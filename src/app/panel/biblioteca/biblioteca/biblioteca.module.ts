import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';

import { BibliotecaPage } from './biblioteca.page';

import { LayoutsModule } from './../../../inc/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    LayoutsModule
  ],
  declarations: [BibliotecaPage]
})
export class BibliotecaPageModule {}
