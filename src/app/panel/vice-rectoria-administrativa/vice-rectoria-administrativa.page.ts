import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vice-rectoria-administrativa',
  templateUrl: './vice-rectoria-administrativa.page.html',
  styleUrls: ['./vice-rectoria-administrativa.page.scss'],
})
export class ViceRectoriaAdministrativaPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

}
