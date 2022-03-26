import { Observable } from 'rxjs';
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AsignaturaI } from 'src/app/models/panel/asignatura';
import { InteractionService } from 'src/app/services/interaction.service';
import { AsignaturasFirebaseService } from 'src/app/services/panel/asignaturas/asignaturas-firebase.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  dataTeacher: AsignaturaI;
  asignaturasList = [];
  id: any;

  constructor(
    private fireAsignatura: AsignaturasFirebaseService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) { this.getAllAsignaturas(); }

  ngOnInit() { }

  backButton() {
    return this.navCtrl.navigateBack('/academico');
  }

  getAllAsignaturas(): Promise<any> {
    return this.fireAsignatura.getAsignaturas('asignaturas').then(fireResponse => {
      fireResponse.subscribe(listAsignaturasRef => {
        this.interactionSvc.presentToast('Cargando...', 200, 'primary');
        this.asignaturasList = listAsignaturasRef.map(asignaturaRef => {
          const asignatura = asignaturaRef.payload.doc.data();
          asignatura['id'] = asignaturaRef.payload.doc.id;
          this.id = asignaturaRef.payload.doc.id;
          console.log('+++++++++++', asignatura);
          return asignatura;
        });
      });
    }).catch((err) => alert('ERROR: ' + JSON.stringify(err)));
  }

  carreraById() {
    const idAsignatura = this.id;
    this.fireAsignatura.getByIdAsignatura('asignaturas', idAsignatura).then( resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      });
    }).catch((err) => alert('ERROR: ' + JSON.stringify(err)));
  }

  updateAsignatura( dato) {
    const idAsignatura = this.id;
    this.fireAsignatura.updateAsignatura('asignaturas', idAsignatura, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE Asignatura: ' + JSON.stringify(err)));
  }


  deleteAsignatura(id) {
    this.fireAsignatura.deleteAsignatura('asignaturas', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }

}
