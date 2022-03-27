import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gestion-cumplimiento-polizas',
  templateUrl: './gestion-cumplimiento-polizas.page.html',
  styleUrls: ['./gestion-cumplimiento-polizas.page.scss'],
})
export class GestionCumplimientoPolizasPage implements OnInit {

  menuVAL = [
    { name: 'Manejo de quejas', redirectTo: '/manejo-quejas' },
    { name: 'Reglamentos y regulaciones', redirectTo: '/reglamentos-regulaciones' },
    { name: 'Pólizas de seguridad', redirectTo: '/polizas-seguridad' },
    { name: 'Comunicación inter departamentos', redirectTo: '/comunicacion-inter-departamentos' },
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

}
