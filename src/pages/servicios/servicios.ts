import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetallePage } from '../detalle/detalle';
import { Keyboard } from '@ionic-native/keyboard';


/**
 * Generated class for the ServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
})
export class ServiciosPage {



	public lista= [];
	public aux;
	public aux2;
	public clone;



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public keyboard : Keyboard) {

  	this.initializeItems();
  	this.http.get('http://serviapp.cl/recursos/Prueba.json').map(res => res.json()).subscribe(data => {
  			  
		      this.aux = data.categorias;
		     
		      for(var i of this.aux)
		      {
		      	var index = Object.keys(i);
		      	
		      	for(var ex of index)
		      	{
		      		
		      		for(var j of i[ex])
			      	{
			      		for(var je of j.clientes)
			      		{
			      			console.log(je);
			      			this.lista.push(je);
			      		};
			      		
			      		
			      		
			      	};
		      	};
		      	
		      }
		  });

		  console.log(this.lista);
  	
  }


  initializeItems() {
	 
	 this.clone = this.lista;
  }

  getItems(ev){

  	this.initializeItems();
  	var val = ev.target.value;

  	 if (val && val.trim() != '') {
  	 console.log(this.clone);

  	 this.clone = this.clone.filter((item) => {
	  			var ex =[];

	  			for(var r of Object.keys(item))
	  			{
	  				ex.push(item[r]);  				
	  			};
	  			console.log(ex.toString());
	  			return (ex.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);

	  		});

    };
    console.log(this.clone);
  }

   goToDetalle(item, tip){
  this.navCtrl.push(DetallePage,{
    item: item,
    tp: tip
  });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosPage');
    
  }

}
