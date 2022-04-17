import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from './../../../../inc/layouts/layouts.module';

import { CreateTareasPageRoutingModule } from './create-tareas-routing.module';

import { CreateTareasPage } from './create-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTareasPageRoutingModule,
    LayoutsModule
  ],
  declarations: [CreateTareasPage]
})
export class CreateTareasPageModule {}
