import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';
import { CallNumber } from '@ionic-native/call-number';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

	public item;
	public aux="";
  phoneNumber: number;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  	this.item = navParams.get('item');
  	console.log(this.item);
  }


  goToDetalle(item, tip){
  this.navCtrl.push(DetallePage,{
    item: item,
    tp: tip
  });
  }

  llamar(mobNumber:string){
       window.open("tel:" + mobNumber);
  }

  valor()
  {
	
	for(var i of this.item.clientes)
	{
    console.log(i.destacado);  
		if(i.destacado)
		this.aux="si";
    return this.aux;
	}
	
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ListaPage');
  }

}
