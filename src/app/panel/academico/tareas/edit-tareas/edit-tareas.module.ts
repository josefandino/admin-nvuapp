import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTareasPageRoutingModule } from './edit-tareas-routing.module';

import { EditTareasPage } from './edit-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTareasPageRoutingModule
  ],
  declarations: [EditTareasPage]
})
export class EditTareasPageModule {}
