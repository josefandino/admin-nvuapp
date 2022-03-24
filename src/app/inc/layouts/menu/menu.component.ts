import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

import { InteractionService } from './../../../services/interaction.service';
import { MenuService } from './../../../services/menu/menu.service';
import { AuthService } from './../../../services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuVAL;

  constructor(
    private menuSvc: MenuService,
    public interactionSvc: InteractionService,
    private menuCtrl: MenuController,
  ) { this.menuPrincipal(); }

  ngOnInit() { }

  toogleMenu() {
    this.menuCtrl.toggle();
  }

  menuPrincipal() {
    this.menuSvc.getMenu().subscribe(data => {
      this.menuVAL = data;
    });
  }

}
