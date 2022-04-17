import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-academico',
  templateUrl: './academico.page.html',
  styleUrls: ['./academico.page.scss'],
})
export class AcademicoPage implements OnInit {

  menuVAL = [
    { name: 'Carreras', redirectTo: '/carreras', icon: ''},
    { name: 'Ciclo Académico', redirectTo: '/ciclo-academico', icon: ''},
    { name: 'Sección', redirectTo: '/section', icon: ''},
    { name: 'Asignaturas', redirectTo: '/asignatura', icon: ''},
    { name: 'Plan de estudios', redirectTo: '/plan-estudios', icon: ''},
    { name: 'Tareas', redirectTo: '/tareas', icon: ''},
    { name: 'Horario', redirectTo: '/horarios', icon: ''},
  ];

  constructor(
    private interactionSvc: InteractionService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }

  backButton() {
    return this.navCtrl.navigateBack('/dashboard');
  }

  // getAllCarreras() {
  //   this.carreraFire.getCarreras('carreras').then(fireResponse => {
  //     fireResponse.subscribe(listCarrerasRef => {
  //       this.interactionSvc.presentToast('Cargando...', 200, 'primary');
  //       this.carrerasList = listCarrerasRef.map(carreraRef => {
  //         const carrera = carreraRef.payload.doc.data();
  //         carrera['id'] = carreraRef.payload.doc.id;
  //         this.id = carreraRef.payload.doc.id;
  //         return carrera;
  //       });
  //     });
  //   });
  // }

  // carreraById() {
  //   const idCarrera = this.id;
  //   this.carreraFire.getByIdCarrera('carreras', idCarrera).then( resp => {
  //     resp.subscribe(docRef => {
  //       console.log('docRef.data++', docRef.data());
  //     });
  //   });
  // }

  // updateCarrera( dato) {
  //   const idCarrera = this.id;
  //   this.carreraFire.updateCarrera('carreras', idCarrera, dato).then(resp => {
  //     alert('La información ha sido actualizada con éxito');
  //   }).catch((err) => alert('Error al UPDATE Carrera: ' + JSON.stringify(err)));
  // }


  // deleteCarrera(id) {
  //   this.carreraFire.deleteCarrera('carreras', id).then((resp) => {
  //     alert('Se elimino con éxito');
  //   }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  // }


}
