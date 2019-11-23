import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  correo = "";
  avatar = "";
  nombre = "";
  telefono = "";
  facebook = "";
  instagram = "";
  twitter = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  addContacto(){
    console.log('Añadir contacto osiosi');

    const contacto = {
      correo: this.correo,
      avatar: this.avatar,
      nombre: this.nombre,
      telefono: this.telefono,
      facebook: this.facebook,
      instagram: this.instagram,
      twitter: this.twitter,
      editar: "NO"
    };
    console.log(JSON.stringify(contacto));

    this.http.post('/contacto/contacto/', contacto).subscribe(data => {console.log(JSON.stringify(data));
      this.navCtrl.pop();
    }, error => {console.log(JSON.stringify(error));
      this.navCtrl.pop();
    });
  }

}
