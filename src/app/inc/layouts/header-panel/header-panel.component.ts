import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss'],
})
export class HeaderPanelComponent implements OnInit {

  fecha: Date = new Date();

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() { }

  toogleMenu() {
    this.menuCtrl.toggle();
  }

}
