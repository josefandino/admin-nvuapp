import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoticiasI } from 'src/app/models/panel/noticias';
import { InteractionService } from 'src/app/services/interaction.service';
import { NewsFirebaseService } from 'src/app/services/panel/noticias/news-firebase.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.page.html',
  styleUrls: ['./create-news.page.scss'],
})
export class CreateNewsPage implements OnInit {


  limit = 300;

  date = new Date().toLocaleDateString();
  hours = new Date().toLocaleTimeString();

  fecha = this.date + ' ' + this.hours;

  dataNoticia: NoticiasI = {
    uid: null,
    title: null,
    description: null,
    author: null,
    date: this.date,
    timeCreated: this.hours,
    dateCreated: this.fecha,
  };

  newsList = [];
  id: any;

  constructor(
    private noticiasFire: NewsFirebaseService,
    private interactionSvc: InteractionService,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  backButton() {
    this.navCtrl.navigateBack('/dashboard');
  }

  createNoticia() {
    this.noticiasFire.createNoticia('noticias', this.dataNoticia)
      .then(async resp => {
        await this.interactionSvc.presentLoading('Agregando NOTICIA...');
        await this.interactionSvc.closeLoading();
        await this.interactionSvc.presentToast('NOTICIA agreada SATISFACTORIAMENTE al sistema...', 1000, 'primary');
        setTimeout(() => {
          this.navCtrl.navigateBack('/news');
        }, 1000);

      }).catch((e) => alert(JSON.stringify(e)));
  }

}
