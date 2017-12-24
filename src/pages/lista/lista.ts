import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';

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

	public comida;
	public serviciotecnico;
	public transporte;
	public ferreteria;
	public peluqueria;
	public otros;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  	this.comida=[

				  {comuna:'PAC',servicio:'Sushi',nombre:'naki',telfijo1:'2 2555 5555',telfijo2:'',telfijo3:'',celular1:'986351615',celular2:'986351615',celular3:'',whatsapp:'+56986351615',direccion:'Alameda #5057',direlink:'goo.gl/maps/zhzoMJaNKT32',correo:'',pagweb:'www.serviapp.cl',facebook:'ServiAPP',facelink:'www.facebook.com/serviappchile',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Pizzería',nombre:'Pepe Jhons',telfijo1:'2 2555 5555',telfijo2:'',telfijo3:'',celular1:'9 8442 8891',celular2:'9 8635 1615',celular3:'',whatsapp:'+569 8635 1615', instagram:'PepeJhon' , instalink:'www.instagram.com/pepejhon' ,direccion:'Alameda #5057',direlink:'goo.gl/maps/zhzoMJaNKT32',correo:'contacto@pepejhon.cl',pagweb:'www.pepejhon.cl',facebook:'ServiApp',facelink:'www.facebook.com/serviappchile',destacado:'si',contenido:''},
				  {comuna:'PAC',servicio:'Veterinaria',nombre:'mascotas',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'986351615',celular2:'986351615',celular3:'',whatsapp:'+56945774106',direccion:'Av Lopez Mateos #02546',direlink:'goo.gl/maps/Nyy2njhZXGu',correo:'',pagweb:'',facebook:'ServiAPP',facelink:'www.facebook.com/serviappchile',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Servicio Tecnico',nombre:'servi',telfijo1:'227032606',telfijo2:'',telfijo3:'',celular1:'950652159',celular2:'',celular3:'',whatsapp:'+56950652159',direccion:'Av Departamental #2585',direlink:'goo.gl/maps/QsmbbCfAM5w',correo:'distribuidoradeviayasosiados@gmail.com',pagweb:'',facebook:'',destacado:'si',contenido:'igualacion de colores masillas lijas diluyente poliuretano'},
				  {comuna:'Lo Espejo',servicio:'Taxi',nombre:'taxidriver',telfijo1:'2232285457',telfijo2:'',telfijo3:'',celular1:'995311507',celular2:'',celular3:'',whatsapp:'+56995311507',direccion:'Clotario Blest #6583',direlink:'goo.gl/maps/2TSUbTSoKkL2',correo:'loovalle2017@gmail.com',pagweb:'www.serviapp.cl',facebook:'',facelink:'',destacado:'',contenido:''}

				  ];

	this.serviciotecnico=[

				  {comuna:'PAC',servicio:'Optica',nombre:'Opticas Leper',telfijo1:'224095321',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'Av Salvador allende #03137',direlink:'goo.gl/maps/2SuWHq65Ly52',correo:'opticasleper@gmail.com',pagweb:'',facebook:'',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Consulta Oftalmologica',nombre:'OpticaBelen',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'977187018',celular2:'972138614',celular3:'',whatsapp:'+56977187018',direccion:'Av.Lazo #1980',direlink:'goo.gl/maps/11V8GGfzeLn',correo:'optica_belen@hotmail.com',pagweb:'',facebook:'Optica-Belen',facelink:'www.facebook.com/Optica-Belen-1780891798793782',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Veterinaria',nombre:'Huella Animal',telfijo1:'225238394',telfijo2:'',telfijo3:'',celular1:'975723765',celular2:'',celular3:'',whatsapp:'',direccion:'Av Ovalle #3558',direlink:'goo.gl/maps/YTHFL7deHXH2',correo:'',pagweb:'',facebook:'',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Clinica Dental',nombre:'Multisonrisas',telfijo1:'228669392',telfijo2:'232297396',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'Av Central #6328',direlink:'goo.gl/maps/2egTckkMPHv',correo:'',pagweb:'',facebook:'',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Pizzeria y Sushi',nombre:'Valdivia s',telfijo1:'229040325',telfijo2:'',telfijo3:'',celular1:'987524147',celular2:'',celular3:'',whatsapp:'+56987524147',direccion:'Av Central #5892',direlink:'goo.gl/maps/5PQLqFwM4JC2',correo:'',pagweb:'',facebook:'',facelink:'',destacado:'',contenido:''}

				  ];

	this.transporte=[

				  {comuna:'PAC',servicio:'Restaurant',nombre:'El Gran Paso',telfijo1:'226840971',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'Calle Rutal #4064 Local 8',direlink:'goo.gl/maps/FSnXYWXE62m',correo:'',pagweb:'',facebook:'',destacado:'',contenido:''},
				  {comuna:'Lo Espejo',servicio:'Lavado de Autos',nombre:'Colombia',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'940474791',celular2:'',celular3:'',whatsapp:'+56940474791',direccion:'Av Central #6207',direlink:'goo.gl/maps/813Ca5iAavu',correo:'',pagweb:'',facebook:'',facelink:'',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Entretenciones',nombre:'Zumo',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'4 Poniente #5894',direlink:'goo.gl/maps/ogGQd7yBh5U2',correo:'',pagweb:'',facebook:'',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Laboratorio Clinico',nombre:'Zaragoza',telfijo1:'225224921',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'Angel Guarelo #2575',direlink:'goo.gl/maps/n7GNLyckrTn',correo:'',pagweb:'www.laboratoriozaragoza.cl',facebook:'',destacado:'',contenido:'examenes de sangre y orina hormonas bioquimica hemograma'},
				  {comuna:'PAC',servicio:'Hojalateria',nombre:'Hojalateria',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'990741628',celular2:'',celular3:'',whatsapp:'+56990741628',direccion:'Departamental #2651',direlink:'goo.gl/maps/e3ESpEKQXZu',correo:'jose_bmo_2@hotmail.com',pagweb:'',facebook:'',destacado:'',contenido:''}

				  ];			  

	this.ferreteria=[

				  {comuna:'PAC',servicio:'Restaurant',nombre:'El Gran Paso',telfijo1:'226840971',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'Calle Rutal #4064 Local 8',direlink:'goo.gl/maps/FSnXYWXE62m',correo:'',pagweb:'',facebook:'',destacado:'',contenido:''},
				  {comuna:'Lo Espejo',servicio:'Lavado de Autos',nombre:'Colombia',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'940474791',celular2:'',celular3:'',whatsapp:'+56940474791',direccion:'Av Central #6207',direlink:'goo.gl/maps/813Ca5iAavu',correo:'',pagweb:'',facebook:'',facelink:'',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Entretenciones',nombre:'Zumo',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'4 Poniente #5894',direlink:'goo.gl/maps/ogGQd7yBh5U2',correo:'',pagweb:'',facebook:'',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Laboratorio Clinico',nombre:'Zaragoza',telfijo1:'225224921',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'Angel Guarelo #2575',direlink:'goo.gl/maps/n7GNLyckrTn',correo:'',pagweb:'www.laboratoriozaragoza.cl',facebook:'',destacado:'',contenido:'examenes de sangre y orina hormonas bioquimica hemograma'},
				  {comuna:'PAC',servicio:'Hojalateria',nombre:'Hojalateria',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'990741628',celular2:'',celular3:'',whatsapp:'+56990741628',direccion:'Departamental #2651',direlink:'goo.gl/maps/e3ESpEKQXZu',correo:'jose_bmo_2@hotmail.com',pagweb:'',facebook:'',destacado:'',contenido:''}

				  ];

	this.peluqueria=[

				  {comuna:'PAC',servicio:'Restaurant',nombre:'El Gran Paso',telfijo1:'226840971',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'Calle Rutal #4064 Local 8',direlink:'goo.gl/maps/FSnXYWXE62m',correo:'',pagweb:'',facebook:'',destacado:'',contenido:''},
				  {comuna:'Lo Espejo',servicio:'Lavado de Autos',nombre:'Colombia',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'940474791',celular2:'',celular3:'',whatsapp:'+56940474791',direccion:'Av Central #6207',direlink:'goo.gl/maps/813Ca5iAavu',correo:'',pagweb:'',facebook:'',facelink:'',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Entretenciones',nombre:'Zumo',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'4 Poniente #5894',direlink:'goo.gl/maps/ogGQd7yBh5U2',correo:'',pagweb:'',facebook:'',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Laboratorio Clinico',nombre:'Zaragoza',telfijo1:'225224921',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'Angel Guarelo #2575',direlink:'goo.gl/maps/n7GNLyckrTn',correo:'',pagweb:'www.laboratoriozaragoza.cl',facebook:'',destacado:'',contenido:'examenes de sangre y orina hormonas bioquimica hemograma'},
				  {comuna:'PAC',servicio:'Hojalateria',nombre:'Hojalateria',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'990741628',celular2:'',celular3:'',whatsapp:'+56990741628',direccion:'Departamental #2651',direlink:'goo.gl/maps/e3ESpEKQXZu',correo:'jose_bmo_2@hotmail.com',pagweb:'',facebook:'',destacado:'',contenido:''}

				  ];

	this.otros=[

				  {comuna:'PAC',servicio:'Restaurant',nombre:'El Gran Paso',telfijo1:'226840971',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'Calle Rutal #4064 Local 8',direlink:'goo.gl/maps/FSnXYWXE62m',correo:'',pagweb:'',facebook:'',destacado:'',contenido:''},
				  {comuna:'Lo Espejo',servicio:'Lavado de Autos',nombre:'Colombia',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'940474791',celular2:'',celular3:'',whatsapp:'+56940474791',direccion:'Av Central #6207',direlink:'goo.gl/maps/813Ca5iAavu',correo:'',pagweb:'',facebook:'',facelink:'',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Entretenciones',nombre:'Zumo',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'4 Poniente #5894',direlink:'goo.gl/maps/ogGQd7yBh5U2',correo:'',pagweb:'',facebook:'',destacado:'',contenido:''},
				  {comuna:'PAC',servicio:'Laboratorio Clinico',nombre:'Zaragoza',telfijo1:'225224921',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp:'',direccion:'Angel Guarelo #2575',direlink:'goo.gl/maps/n7GNLyckrTn',correo:'',pagweb:'www.laboratoriozaragoza.cl',facebook:'',destacado:'',contenido:'examenes de sangre y orina hormonas bioquimica hemograma'},
				  {comuna:'PAC',servicio:'Hojalateria',nombre:'Hojalateria',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'990741628',celular2:'',celular3:'',whatsapp:'+56990741628',direccion:'Departamental #2651',direlink:'goo.gl/maps/e3ESpEKQXZu',correo:'jose_bmo_2@hotmail.com',pagweb:'',facebook:'',destacado:'',contenido:''}

				  ];


  }

  goToDetalle(item){
  this.navCtrl.push(DetallePage,{
    item: item
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

}
