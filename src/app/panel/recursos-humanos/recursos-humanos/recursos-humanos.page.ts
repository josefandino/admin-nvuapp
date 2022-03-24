import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursos-humanos',
  templateUrl: './recursos-humanos.page.html',
  styleUrls: ['./recursos-humanos.page.scss'],
})
export class RecursosHumanosPage implements OnInit {

  menuVAL = [
    { name: 'Nómina de sueldos', redirectTo: '/nomina-sueldos' },
    { name: 'Reclutamiento docente y otros', redirectTo: '/reclutamiento-docente' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
