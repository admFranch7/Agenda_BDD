import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  avatar = "2";
  nombre = "";
  telefono = "";
  facebook = "";
  instagram = "";
  twitter = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  addContacto(){
    console.log('Añadir contacto osiosi');

    if (this.nombre === "" || this.telefono === "") {
      const alerta = this.alertCtrl.create({title: "¡Un momento!", subTitle: "El contacto debe tener por lo menos nombre y telefono.", buttons: ['OK']})

      alerta.present();
    }
    else{
      if (this.avatar === "1") {
        this.avatar = "https://3.bp.blogspot.com/-Y096u66r_U8/WHQebMbvCXI/AAAAAAAAEjU/tqCfSi0FZOApfOFMFr1tmwwLv4-NyO_eACLcB/s1600/myAvatar.png"
      }
      else{
        this.avatar = "https://i.pinimg.com/originals/79/9f/c0/799fc06b357f879e2155e4b5bae92e05.png"
      }
      const contacto = {
        correo: this.correo,
        avatar: this.avatar,
        nombre: this.nombre,
        telefono: this.telefono,
        facebook: this.facebook,
        instagram: this.instagram,
        twitter: this.twitter,
      };
      console.log(JSON.stringify(contacto));

      this.http.post('/contacto/create/', contacto).subscribe(data => {console.log(JSON.stringify(data));
        this.navCtrl.pop();
      }, error => {console.log(JSON.stringify(error));
        this.navCtrl.pop();
      });
    }
  }

}
