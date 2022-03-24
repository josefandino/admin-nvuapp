import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionAppPageRoutingModule } from './revision-app-routing.module';

import { RevisionAppPage } from './revision-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionAppPageRoutingModule
  ],
  declarations: [RevisionAppPage]
})
export class RevisionAppPageModule {}
