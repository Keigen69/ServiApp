import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ServiciosPage } from '../servicios/servicios';
import { ContactoPage } from '../contacto/contacto';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  console.log('ionViewDidLoad InicioPage');
  }

  goToCategorias(){
  this.navCtrl.push(HomePage);
  }

  goToFavoritos(){
  this.navCtrl.push(HomePage);
  }

  goToServicios(){
  this.navCtrl.push(ServiciosPage);
  }

  goToContacto(){
  this.navCtrl.push(ContactoPage);
  }

  web(){
  window.open("https://serviapp.cl/registro/");
  }
}
