import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ServiciosPage } from '../servicios/servicios';
import { ContactoPage } from '../contacto/contacto';
import { DetallePage } from '../detalle/detalle';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  public posts: any;
  public hola = "hola";
  public myArray = ['0','1','2','3','4','5','6','7','8'];
  public listaPromo = ['0','1','2','3','4','5','6','7','8'];

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {

  this.posts = null;
   
  this.http.get('http://serviapp.cl/recursos/promo.json').map(res => res.json()).subscribe(data => {
      this.posts = data.promo;
      var x;
      for(x = 0; x < this.listaPromo.length; x++){
        this.listaPromo[x] = this.posts[this.myArray[x]];
      };
      console.log(this.posts);
      console.log(this.hola);
      console.log(this.listaPromo);
      
  });

   var i,j,k;
    for (i = this.myArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = this.myArray[i - 1];
        this.myArray[i - 1] = this.myArray[j];
        this.myArray[j] = k;
    }

  }


  ionViewDidLoad() {
  console.log('ionViewDidLoad InicioPage');
  console.log(this.myArray);
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

  goToDetalle(item, tip){
  this.navCtrl.push(DetallePage,{
    item: item,
    tp: tip
  });
  }

  web(){
  window.open("https://serviapp.cl/registro/");
  }
}
