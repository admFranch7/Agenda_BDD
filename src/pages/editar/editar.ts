import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  contacto = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contacto = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
  }

}
