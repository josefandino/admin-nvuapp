import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss'],
})
export class HeaderPanelComponent implements OnInit {
  date: Date = new Date();
  // hours = new Date().getHours();
  // data = new Date().setTime();
  // fecha: Date = new Date();

  // date = new Date().toLocaleDateString('sv-SE');
  hours = new Date().toLocaleTimeString();
  year = new Date().getFullYear();
  mes = new Date().getMonth();
  dia = new Date().getDay();
  fechaFull = new Date().toLocaleString('sv-SE');
  fecha = new Date().toLocaleDateString('sv-SE');
  timestamp: any = new Date().getTime();

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() { }

  toogleMenu() {
    this.menuCtrl.toggle();
  }

}
