import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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
  correo = "";
  avatar = "";
  nombre = "";
  telefono = "";
  facebook = "";
  instagram = "";
  twitter = "";
  id = "";

  contacto = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.contacto = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
  }

  clickAcept(){
    if (this.correo !== "") {
      this.contacto['correo'] = this.correo;
    }
    if (this.avatar !== "") {
      this.contacto['avatar'] = this.avatar;
    }
    if (this.nombre !== "") {
      this.contacto['nombre'] = this.nombre;
    }
    if (this.telefono !== "") {
      this.contacto['telefono'] = this.telefono;
    }
    if (this.facebook !== "") {
      this.contacto['facebook'] = this.facebook;
    }
    if (this.instagram !== "") {
      this.contacto['instagram'] = this.instagram;
    }
    if (this.twitter !== "") {
      this.contacto['twitter'] = this.twitter;
    }
    this.contacto['editar'] = "SI";
    const contact = this.contacto;
    console.log(JSON.stringify(this.contacto));

    this.http.post('/contacto/contacto/', contact).subscribe(data => {console.log(JSON.stringify(data));
      this.navCtrl.pop();
    }, error => {console.log(JSON.stringify(error));
      this.navCtrl.pop();
    });
  }

  clickDisscard() {
    this.navCtrl.pop();
  }

}
