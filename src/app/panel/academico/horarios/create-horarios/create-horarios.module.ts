import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateHorariosPageRoutingModule } from './create-horarios-routing.module';

import { CreateHorariosPage } from './create-horarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateHorariosPageRoutingModule
  ],
  declarations: [CreateHorariosPage]
})
export class CreateHorariosPageModule {}
