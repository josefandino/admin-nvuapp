import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderPanelComponent } from './header-panel/header-panel.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    HeaderPanelComponent
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    HeaderPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
