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
      if (this.avatar === "1") {
        this.contacto['avatar'] = "https://3.bp.blogspot.com/-Y096u66r_U8/WHQebMbvCXI/AAAAAAAAEjU/tqCfSi0FZOApfOFMFr1tmwwLv4-NyO_eACLcB/s1600/myAvatar.png"
      }
      else{
        this.contacto['avatar'] = "https://i.pinimg.com/originals/79/9f/c0/799fc06b357f879e2155e4b5bae92e05.png"
      }
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
    const contact = this.contacto;
    console.log(JSON.stringify(this.contacto));

    this.http.post('/contacto/update/', contact).subscribe(data => {console.log(JSON.stringify(data));
      this.navCtrl.pop();
    }, error => {console.log(JSON.stringify(error));
      this.navCtrl.pop();
    });
  }

  clickDisscard() {
    this.navCtrl.pop();
  }

}
