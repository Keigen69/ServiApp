import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  llamar(){
  	 window.open("tel:" + "+56941028757");
  }

  web(){
  	 window.open("https://www.serviapp.cl");
  }

   mailto() {
   window.open(`mailto:${"contacto@serviapp.cl"}`, '_system');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

}
