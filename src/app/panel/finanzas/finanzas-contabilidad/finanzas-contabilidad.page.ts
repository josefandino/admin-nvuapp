import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-finanzas-contabilidad',
  templateUrl: './finanzas-contabilidad.page.html',
  styleUrls: ['./finanzas-contabilidad.page.scss'],
})
export class FinanzasContabilidadPage implements OnInit {

  menuVAL = [
    { name: 'Regulaciones', redirectTo: '/regulaciones' },
    { name: 'Documentos electrónicos', redirectTo: '/documentos-electronicos' },
    { name: 'Manejo de activos', redirectTo: '/manejo-activos' },
    { name: 'Presupuesto y cumplimiento financiero', redirectTo: '/presupuesto-financiero' },
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

}
