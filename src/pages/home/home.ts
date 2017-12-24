import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPage } from '../lista/lista';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	params: Object;
  	pushPage: any;


  constructor(public navCtrl: NavController) {

  	this.pushPage = ListaPage;
    this.params = "comida";

  }

  ionViewDidLoad() {



  }

  goToLista(item){
  this.navCtrl.push(ListaPage);
  }



}