/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SectionI } from 'src/app/models/panel/section';
import { InteractionService } from 'src/app/services/interaction.service';
import { SectionService } from 'src/app/services/panel/section/section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {

  dataSection: SectionI;
  sectionsList = [];
  id: any;
  deleted = false;

  constructor(
    private interactionSvc: InteractionService,
    private sectionSvc: SectionService,
    private navCtrl: NavController
  ) { this.getAllSections(); }

  ngOnInit() { }
  backButton() { this.navCtrl.navigateBack('/academico'); }

  async getAllSections() {
    try {
      await this.interactionSvc.presentLoading('CARGANDO...');
      await this.sectionSvc.getSections('section').then(async fireResponse => {
        fireResponse.subscribe(async listSectionsRef => {
          this.sectionsList = listSectionsRef.map( sectionRef => {
            const section = sectionRef.payload.doc.data();
            section['id'] = sectionRef.payload.doc.id;
            this.id = sectionRef.payload.doc.id;
            this.interactionSvc.closeLoading();
            return section;
          });
        });
      });
    } catch (e_1) {alert(e_1); }
  }

  sectionById() {
    const idSection = this.id;
    this.sectionSvc.getByIdSection('section', idSection).then( resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      });
    });
  }

  updateSection( dato) {
    const idSection = this.id;
    this.sectionSvc.updateSection('sections', idSection, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE Section: ' + JSON.stringify(err)));
  }


  deleteSection(id) {
    this.sectionSvc.deleteSection('sections', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }

}
