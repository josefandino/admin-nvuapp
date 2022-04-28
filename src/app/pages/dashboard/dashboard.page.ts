import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthService } from './../../services/auth/auth.service';
import { MenuService } from './../../services/menu/menu.service';
import { ProfileService } from './../../services/panel/profile.service';
import { InteractionService } from './../../services/interaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  menuVAL;

  constructor(
    public interactionSvc: InteractionService,
    private profile: ProfileService,
    private iterationCvc: InteractionService,
    private menuSvc: MenuService,
    private navCtrl: NavController,
    private auth: AuthService,
  ) {  }

  ngOnInit() {
    this.menuPrincipal();
  }

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
