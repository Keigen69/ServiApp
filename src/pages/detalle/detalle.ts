import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  public item;
  phoneNumber: number;
  public pet;

  constructor(public navCtrl: NavController, public navParams: NavParams, private call: CallNumber) {

	this.item = navParams.get('item');
  this.pet = "promocion";

  }

  llamar(mobNumber:string)
  {
       window.open("tel:" + mobNumber);
  }
  abrirWeb(pagina:string)
  {
      window.open("http://" +pagina); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
