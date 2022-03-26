import { Component, Input, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() redirecTo: string;

  constructor(
    private menuCtrl: MenuController,
    private navCtr: NavController,
  ) { }

  ngOnInit() { }

  // backButton() {
  //   this.navCtr.navigateBack(this.redirecTo);
  // }

}
