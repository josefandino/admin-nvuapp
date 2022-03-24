/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { DatabaseService } from './../../services/auth/database.service';
import { InteractionService } from './../../services/interaction.service';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials = {
    email: 'admin@admin.com',
    password: '123456'
  };

  usersList = [];

  constructor(
    private auth: AuthService,
    private databse: DatabaseService,
    private navCtrl: NavController,
    public interactionSvc: InteractionService
  ) { }

  ngOnInit() {
    this.databse.getAll('users').then(fireResp => {
      fireResp.subscribe(listUsersRef => {
        this.usersList = listUsersRef.map(usersRef => {
          const user = usersRef.payload.doc.data();
          user['id'] = usersRef.payload.doc.id;
          return user;
        });
        // console.log(this.usersList);
      });
    });
  }

  userList() {

  }

  altaUser() {
    this.databse.create('users', this.credentials)
      .then(async resp => {
        await this.interactionSvc.presentLoading('Ingresandoo...');
        await this.interactionSvc.closeLoading();
        // console.log('Resp- ', resp);
        // alert(JSON.stringify(resp));
      }).catch((e) => alert(JSON.stringify(e)));
  }

  delete(id) {
    console.log('user', id);
    this.databse.delete('users', id).then(resp => {
      console.log('Se elimino con exito', resp);
    }).catch((e) => alert(JSON.stringify(e)));
  }

  updateUser(id, dato) {
    this.databse.update('users', id, dato);
  }

  obtenerPorId(id) {
    this.databse.getById('users', id).then(res => {
      res.subscribe(docRef => {
        const user = docRef.data();
        user['id'] = docRef.id;
        // console.log(user);
      });
    });
  }

  async login(email: string, password: string) {
    await this.interactionSvc.presentLoading('Ingresandoo...');
    await this.interactionSvc.closeLoading();
    const resp = await this.auth.login(this.credentials.email, this.credentials.password)
      .catch(() => this.interactionSvc.presentToast('Los datos ingresados son incorrectos, si persiste el error ponte en contacto con Soporte', 4000, 'danger'));
    if (resp) {
      await this.interactionSvc.presentLoading('Ingresandoo...');
      await this.interactionSvc.closeLoading();
      await this.interactionSvc.presentToast('Ingreso exitoso', 1000, 'success');
      setTimeout(() => {
        this.navCtrl.navigateBack('/dashboard');
      }, 1000);
    }
  }

}
