import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { RegistroPage } from '../registro/registro';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactos:any;
  registroPage = RegistroPage;
  infoPage = InfoPage;

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  ionViewWillEnter(){
    this.http.get("/contacto/contacto/").subscribe(data => {
      this.contactos = data;
      console.log(JSON.stringify(data));
    },
     error => {
      console.log(JSON.stringify(error));
    });
  }

  clickAdd(){
    console.log("Boton picado exitosamente");
    this.navCtrl.push(this.registroPage);
  }

  clickCc(contacto){
    console.log("Boton info contacto");
    this.navCtrl.push(this.infoPage, {data:contacto});
  }

}
