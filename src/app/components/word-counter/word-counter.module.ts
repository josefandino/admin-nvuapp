import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { WordCounterComponent } from './word-counter.component';


@NgModule({
  declarations: [
    WordCounterComponent
  ],
  exports: [
    WordCounterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class WordCounterModule { }
