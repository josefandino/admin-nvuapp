import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-panel-admision',
  templateUrl: './panel-admision.page.html',
  styleUrls: ['./panel-admision.page.scss'],
})
export class PanelAdmisionPage implements OnInit {

  menuVAL = [
    { name: 'Admisión del estudiante', redirectTo: '/admision-student', icon: ''},
    { name: 'Records del estudiante', redirectTo: '/records-student', icon: ''},
    { name: 'Servicios al estudiante', redirectTo: '/services-student', icon: ''},
    { name: 'Pantillas Cartas Memos', redirectTo: '/pantillas-cartas-memos', icon: ''},
    { name: 'Revisión App', redirectTo: '/revision-app', icon: ''},
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

}
