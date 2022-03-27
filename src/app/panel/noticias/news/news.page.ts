/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoticiasI } from 'src/app/models/panel/noticias';
import { InteractionService } from 'src/app/services/interaction.service';
import { NewsFirebaseService } from 'src/app/services/panel/noticias/news-firebase.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {


  newsList = [];
  id: any;

  constructor(
    private noticiasFire: NewsFirebaseService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController
  ) {
    this.getAllNoticias();
  }

  ngOnInit() { }
  backButton() { this.navCtrl.navigateBack('/dashboard'); }

  getAllNoticias() {
    this.noticiasFire.getNoticias('noticias').then(fireResponse => {
      fireResponse.subscribe(listNoticiasRef => {
        this.interactionSvc.presentToast('Cargando...', 200, 'primary');
        this.newsList = listNoticiasRef.map(noticiaRef => {
          const noticia = noticiaRef.payload.doc.data();
          noticia['id'] = noticiaRef.payload.doc.id;
          this.id = noticiaRef.payload.doc.id;
          return noticia;
        });
      });
    });
  }

  noticiaById() {
    const idNoticia = this.id;
    this.noticiasFire.getByIdNoticia('noticias', idNoticia).then( resp => {
      resp.subscribe(docRef => {
        console.log('docRef.data++', docRef.data());
      });
    });
  }

  updateNoticia( dato) {
    const idNoticia = this.id;
    this.noticiasFire.updateNoticia('noticias', idNoticia, dato).then(resp => {
      alert('La información ha sido actualizada con éxito');
    }).catch((err) => alert('Error al UPDATE NOTICIA: ' + JSON.stringify(err)));
  }

  deleteNoticia(id) {
    this.noticiasFire.deleteNoticia('noticias', id).then((resp) => {
      alert('Se elimino con éxito');
    }).catch((err) => alert('Error al ELIMINAR: ' + JSON.stringify(err)));
  }

}
