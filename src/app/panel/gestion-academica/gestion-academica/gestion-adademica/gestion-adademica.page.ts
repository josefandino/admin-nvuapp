import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gestion-adademica',
  templateUrl: './gestion-adademica.page.html',
  styleUrls: ['./gestion-adademica.page.scss'],
})
export class GestionAdademicaPage implements OnInit {

  menuVAL = [
    { name: 'Academia y gestión de programas', redirectTo: '/academia-gestion-programas' },
    { name: 'Exámenes y evaluaciones', redirectTo: '/examenes-evaluaciones' },
    { name: 'Grados convocatorias', redirectTo: '/grados-convocatorias' },
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

}
