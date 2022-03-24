import { NavController } from '@ionic/angular';
import { InteractionService } from './services/interaction.service';
import { AuthService } from './services/auth/auth.service';
import { Component } from '@angular/core';

import { MenuService } from './services/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuVAL;

  constructor(
    private menuSvc: MenuService,
    private navCtrl: NavController,
    public interactionSvc: InteractionService,
    private auth: AuthService,
  ) { this.menuPrincipal(); }

  menuPrincipal() {
    this.menuSvc.getMenu().subscribe(data => {
      this.menuVAL = data;
    });
  }

  async logut() {
    await this.auth.logut().then(data => {
      this.interactionSvc.presentToast('La sessión se cerró exitosamente', 600, 'primary');
      setTimeout(() => {
        this.navCtrl.navigateBack('/login');
      }, 1200);
    });
  }

}
