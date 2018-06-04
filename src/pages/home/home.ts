import { Component } from '@angular/core';
import { ListaPage } from '../lista/lista';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;
  public comida;
  public serviciotecnico;
  public transporte;
  public negocios;
  public belleza;
  public mascotas;
  public salud;
  public otros;
 

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {

  this.posts = null;
   
  this.http.get('http://serviapp.cl/recursos/prueba.json').map(res => res.json()).subscribe(data => {
      this.posts = data.categorias;
      this.comida = this.posts[0].comida;
      this.serviciotecnico = this.posts[1].serviciotecnico;
      this.transporte = this.posts[2].transporte;
      this.negocios = this.posts[3].negocios;
      this.belleza = this.posts[4].belleza;
      this.mascotas = this.posts[5].mascotas;
      this.salud = this.posts[6].salud;
      this.otros = this.posts[7].otros;
      console.log(this.posts);
      console.log(this.comida);

  });



  }

  ionViewDidLoad() {

  }

  goToListaComida(comi){
  this.navCtrl.push(ListaPage,{
    item: comi
  });
  }

  goToListaTecnico(servi){
  this.navCtrl.push(ListaPage,{
    item: servi
  });
  }

  goToListaTran(tran){
  this.navCtrl.push(ListaPage,{
    item: tran
  });
  }

  goToListaBelle(belle){
  this.navCtrl.push(ListaPage,{
    item: belle
  });
  }

  goToListaMasco(masco){
  this.navCtrl.push(ListaPage,{
    item: masco
  });
  }

  goToListaNego(nego){
  this.navCtrl.push(ListaPage,{
    item: nego
  });
  }

  goToListaSal(sal){
  this.navCtrl.push(ListaPage,{
    item: sal
  });
  }

  goToListaOtr(otr){
  this.navCtrl.push(ListaPage,{
    item: otr
  });
  }





}