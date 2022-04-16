/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CarrerasI } from 'src/app/models/panel/carreras';
import { InteractionService } from 'src/app/services/interaction.service';
import { CarrerasService } from 'src/app/services/panel/carreras/carreras.service';


@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.page.html',
  styleUrls: ['./carreras.page.scss'],
})
export class CarrerasPage implements OnInit {

  dataCarrera: CarrerasI;
  carrerasList = [];
  id: any;
  deleted = false;

  constructor(
    private carreraFire: CarrerasService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController
  ) { this.getAllCarreras(); }

  ngOnInit() {
  }

  backButton() { this.navCtrl.navigateBack('/academico'); }

  async getAllCarreras() {
    try {
      return await this.carreraFire.getCarreras('carreras').then(async fireResponse => {
        await this.interactionSvc.presentLoading('CARGANDO...');
        return  fireResponse.subscribe( listCarrerasRef => {
          this.carrerasList = listCarrerasRef.map( carreraRef => {
            const carrera = carreraRef.payload.doc.data();
            carrera['id'] = carreraRef.payload.doc.id;
            this.id = carreraRef.payload.doc.id;
            this.interactionSvc.closeLoading();
            return carrera;
          });
        });
      });
    } catch (e_1) {alert(e_1); }
  }

  carreraById() {
    const idCarrera = this.id;
    this.carreraFire.getByIdCarrera('carreras', idCarrera).then( resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      });
    });
  }

  updateCarrera( dato) {
    const idCarrera = this.id;
    this.carreraFire.updateCarrera('carreras', idCarrera, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE Carrera: ' + JSON.stringify(err)));
  }


  deleteCarrera(id) {
    this.carreraFire.deleteCarrera('carreras', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }
}
