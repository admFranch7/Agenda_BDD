import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { EditarPage } from '../editar/editar';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  contacto = "";
  editarPage = EditarPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient){
    this.contacto = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  rmContacto(id){
    console.log('Eliminar contacto');

    const contacto = {
      nombre: 'eliminar00',
      id: id
    }

    this.http.post('/contacto/contacto/', contacto).subscribe(data => {console.log(JSON.stringify(data));
      this.navCtrl.pop();
    }, error => {console.log(JSON.stringify(error));
      this.navCtrl.pop();
    });
  }

  editarContacto(contacto){
    this.navCtrl.push(this.editarPage, {data:contacto});
  }
}
