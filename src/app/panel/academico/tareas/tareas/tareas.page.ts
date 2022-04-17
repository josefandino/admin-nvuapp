/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TareasI } from 'src/app/models/panel/tareas';
import { InteractionService } from 'src/app/services/interaction.service';
import { TareasFirebaseService } from 'src/app/services/panel/tareas/tareas-firebase.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  dataTarea: TareasI;
  tareasList = [];
  id: any;
  deleted = false;

  constructor(
    private interactionSvc: InteractionService,
    private tareasFireSvc: TareasFirebaseService,
    private navCtrl: NavController
  ) { this.getAllTareas(); }

  ngOnInit() { }
  backButton() { this.navCtrl.navigateBack('/academico'); }

  async getAllTareas() {
    try {
      // await this.interactionSvc.presentLoading('CARGANDO...');
      await this.tareasFireSvc.getTareas('tareas').then(async fireResponse => {
        fireResponse.subscribe(async listTareasRef => {
          this.tareasList = listTareasRef.map(tareaRef => {
            const tarea = tareaRef.payload.doc.data();
            console.log('lllll', tarea);
            tarea['id'] = tareaRef.payload.doc.id;
            this.id = tareaRef.payload.doc.id;
            this.interactionSvc.closeLoading();
            return tarea;
          });
        });
      });
    } catch (e_1) { alert(e_1); }
  }

  tareaById() {
    const idTarea = this.id;
    this.tareasFireSvc.getByIdTarea('tarea', idTarea).then(resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      });
    });
  }

  updateTarea(dato) {
    const idTarea = this.id;
    this.tareasFireSvc.updateTarea('tareas', idTarea, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE Tarea: ' + JSON.stringify(err)));
  }


  deleteTarea(id) {
    this.tareasFireSvc.deleteTarea('tareas', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }

}
