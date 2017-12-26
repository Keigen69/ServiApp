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
	public negocios;
	public belleza;
	public mascotas;
	public salud;
	public otros;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  	this.comida=[

				  {sector:'1',servicio:'Sushi',nombre:'Naki',telfijo1:'2 2345 5785',telfijo2:'',telfijo3:'',celular1:'9 8635 1615',celular2:'9 8635 1615',celular3:'',whatsapp1:'+569 8635 1615',whatsapp2:'+569 8635 1615',direccion:'General Mora #4168',direlink:'https://goo.gl/maps/m3xE9whXyxq',correo:'',pagweb:'www.serviapp.cl' ,instagram:'' ,instalink:'' ,facebook:'Naki Sushi',facelink:'www.facebook.com/serviappchile',destacado:'',contenido:'' ,efectivo:'si' ,credito:'si' ,debito:'si' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'si' ,catalogo:''},
				  {sector:'1',servicio:'Pizzería',nombre:'Pepe Jhons',telfijo1:'2 2555 8956',telfijo2:'2 3515 4123',telfijo3:'',celular1:'9 8442 8891',celular2:'9 8635 1615',celular3:'',whatsapp1:'+569 8635 1615',whatsapp2:'+569 8635 1615',direccion:'General Mora #4168',direlink:'https://goo.gl/maps/m3xE9whXyxq',correo:'',pagweb:'www.pepejhons.cl', instagram:'' ,instalink:'' ,facebook:'Pepe Jhons',facelink:'www.facebook.com/serviappchile',destacado:'si',contenido:'' ,efectivo:'si' ,credito:'si' ,debito:'si' ,cheque:'si' ,cajavecina:'' ,cargabip:'' ,promocion:'si' ,catalogo:'si'},
				  {sector:'1',servicio:'Fuente de soda',nombre:'El tio Lolo',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'9 8635 1615',celular2:'9 8635 1615',celular3:'',whatsapp1:'+569 4577 4106',whatsapp2:'+569 8635 1615',direccion:'General Mora #4168',direlink:'https://goo.gl/maps/m3xE9whXyxq',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',facelink:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:'si'},
				  {sector:'1',servicio:'Sanguchería',nombre:'El Rey del sandwich',telfijo1:'2 2703 2606',telfijo2:'',telfijo3:'',celular1:'9 5065 2159',celular2:'',celular3:'',whatsapp1:'+569 5065 2159',whatsapp2:'+569 8635 1615',direccion:'General Mora #4168',direlink:'https://goo.gl/maps/m3xE9whXyxq',correo:'distribuidoradeviayasosiados@gmail.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'si',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Heladería',nombre:'Santo Gelato',telfijo1:'2 2322 85457',telfijo2:'',telfijo3:'',celular1:'9 9531 1507',celular2:'',celular3:'',whatsapp1:'+569 9531 1507',whatsapp2:'+569 8635 1615',direccion:'General Mora #4168',direlink:'https://goo.gl/maps/m3xE9whXyxq',correo:'loovalle2017@gmail.com',pagweb:'www.santogelatochile.cl',instagram:'' ,instalink:'' ,facebook:'',facelink:'',destacado:'',contenido:'',efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Restaurant',nombre:'El Pollo Loco',telfijo1:'2 2892 8557',telfijo2:'',telfijo3:'',celular1:'9 9531 1507',celular2:'',celular3:'',whatsapp1:'+569 9531 1507',whatsapp2:'+569 8635 1615',direccion:'General Mora #4168',direlink:'https://goo.gl/maps/m3xE9whXyxq',correo:'polloloco@gmail.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',facelink:'',destacado:'',contenido:'',efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''}

				  ];

	this.serviciotecnico=[

				  {sector:'1',servicio:'Reparación celulares',nombre:'Android Seguro',telfijo1:'2 2409 5321',telfijo2:'2 2356 4851',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'+569 8451 7812',whatsapp2:'+569 8635 1615',direccion:'Av Salvador allende #03137',direlink:'goo.gl/maps/2SuWHq65Ly52',correo:'an.droid.seguro@gmail.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Asistencia computadores y notebooks',nombre:'Reparación computadores Alexx',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'9 7718 7018',celular2:'9 7213 8614',celular3:'',whatsapp1:'+569 7718 7018',whatsapp2:'+569 8635 1615',direccion:'Av.Lazo #1980',direlink:'goo.gl/maps/11V8GGfzeLn',correo:'contacto@opticabelen.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'Optica-Belen',facelink:'www.facebook.com/alexxpcnote',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Reparación calefonts',nombre:'Don Manuel',telfijo1:'2 2523 8394',telfijo2:'',telfijo3:'',celular1:'9 7572 3765',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'',direccion:'Av Ovalle #3558',direlink:'goo.gl/maps/YTHFL7deHXH2',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Mecánica',nombre:'Soto Hermanos',telfijo1:'2 2866 9392',telfijo2:'2 3229 7396',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'',direccion:'Av Central #6328',direlink:'goo.gl/maps/2egTckkMPHv',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Reparación electrodomésticos',nombre:'Reparaciones Alfredo Pereira',telfijo1:'2 2904 0325',telfijo2:'',telfijo3:'',celular1:'9 8752 4147',celular2:'',celular3:'',whatsapp1:'+569 8752 4147',whatsapp2:'+569 8635 1615',direccion:'Av Central #5892',direlink:'goo.gl/maps/5PQLqFwM4JC2',correo:'alfredo.pereira.a@gmail.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',facelink:'',destacado:'',contenido:'',efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''}

				  ];

	this.transporte=[

				  {sector:'1',servicio:'Radio Taxi',nombre:'Traxidriver',telfijo1:'2 6840 0971',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'5',direccion:'Calle Rutal #4064 Local 8',direlink:'goo.gl/maps/FSnXYWXE62m',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Fletes',nombre:'Sergio Castillo',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'9 4047 4791',celular2:'',celular3:'',whatsapp1:'+569 4047 4791',whatsapp2:'+569 8635 1615',direccion:'Av Central #6207',direlink:'goo.gl/maps/813Ca5iAavu',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',facelink:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Viajes especiales',nombre:'Buses Coyio',telfijo1:'2 2356 5178',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'+569 8478 8899',whatsapp2:'',direccion:'4 Poniente #5894',direlink:'goo.gl/maps/ogGQd7yBh5U2',correo:'busescoyios@hotmail.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Radio Taxi',nombre:'Veloz',telfijo1:'2 2522 4921',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'',direccion:'Angel Guarelo #2575',direlink:'goo.gl/maps/n7GNLyckrTn',correo:'',pagweb:'www.radiotaxielveloz.cl',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Flete',nombre:'Fletes El paso',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'9 9074 1628',celular2:'',celular3:'',whatsapp1:'+569 9074 1628',whatsapp2:'',direccion:'Departamental #2651',direlink:'goo.gl/maps/e3ESpEKQXZu',correo:'jose_bmo_2@hotmail.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'',efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''}

				  ];			  

	this.negocios=[

				  {sector:'1',servicio:'Ferreteria',nombre:'El Nano',telfijo1:'2 2684 0971',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'+',direccion:'Calle Rutal #4064 Local 8',direlink:'goo.gl/maps/FSnXYWXE62m',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Panadería',nombre:'Macarena',telfijo1:'2 1122 5479',telfijo2:'',telfijo3:'',celular1:'9 4047 4791',celular2:'',celular3:'',whatsapp1:'+569 4047 4791',whatsapp2:'',direccion:'Av Central #6207',direlink:'goo.gl/maps/813Ca5iAavu',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',facelink:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Verdulería',nombre:'Zumo',telfijo1:'2 4587 1548',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'',direccion:'4 Poniente #5894',direlink:'goo.gl/maps/ogGQd7yBh5U2',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Carnicería',nombre:'Carnes El Horizonte',telfijo1:'2 2522 4921',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'',direccion:'Angel Guarelo #2575',direlink:'goo.gl/maps/n7GNLyckrTn',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Panadería',nombre:'Pan Sanito',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'990741628',celular2:'',celular3:'',whatsapp1:'+56990741628',whatsapp2:'+569 8635 1615',direccion:'Departamental #2651',direlink:'goo.gl/maps/e3ESpEKQXZu',correo:'jose_bmo_2@hotmail.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'',efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''}

				  ];

	this.belleza=[

				  {sector:'1',servicio:'Peluquería',nombre:'Tia Mary',telfijo1:'2 2684 0971',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'+569 4878 1548',whatsapp2:'+569 8635 1615',direccion:'Calle Rutal #4064 Local 8',direlink:'goo.gl/maps/FSnXYWXE62m',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Manicura',nombre:'Colombia-uñas',telfijo1:'2 1548 9632',telfijo2:'',telfijo3:'',celular1:'9 4047 4791',celular2:'',celular3:'',whatsapp1:'+569 4047 4791',whatsapp2:'',direccion:'Av Central #6207',direlink:'goo.gl/maps/813Ca5iAavu',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',facelink:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Pedicura',nombre:'Pedisano',telfijo1:'2 9854 4125',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'',direccion:'4 Poniente #5894',direlink:'goo.gl/maps/ogGQd7yBh5U2',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Salón de belleza',nombre:'Zaragoza',telfijo1:'2 2522 4921',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'',direccion:'Angel Guarelo #2575',direlink:'goo.gl/maps/n7GNLyckrTn',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Artículos de belleza',nombre:'Carla Izuna',telfijo1:'2 4712 6584',telfijo2:'',telfijo3:'',celular1:'9 9074 1628',celular2:'',celular3:'',whatsapp1:'+569 9074 1628',whatsapp2:'+569 8635 1615',direccion:'Departamental #2651',direlink:'goo.gl/maps/e3ESpEKQXZu',correo:'jose_bmo_2@hotmail.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'',efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''}

				  ];

	this.mascotas=[

				  {sector:'1',servicio:'Veterinaria',nombre:'Gato Blanco',telfijo1:'2 2684 0971',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'+569 7412 5214',whatsapp2:'+569 8635 1615',direccion:'Calle Rutal #4064 Local 8',direlink:'goo.gl/maps/FSnXYWXE62m',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Peluquería canina',nombre:'Happy Dogs',telfijo1:'2 8541 2211',telfijo2:'',telfijo3:'',celular1:'9 4047 4791',celular2:'',celular3:'',whatsapp1:'+569 4047 4791',whatsapp2:'',direccion:'Av Central #6207',direlink:'goo.gl/maps/813Ca5iAavu',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',facelink:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Alimento para mascostas',nombre:'Yummycan',telfijo1:'2 1144 2356',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'',direccion:'4 Poniente #5894',direlink:'goo.gl/maps/ogGQd7yBh5U2',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Veterinaria',nombre:'Juan Manuel Rodríguez',telfijo1:'2 2522 4921',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'+569 8989 5412',whatsapp2:'',direccion:'Angel Guarelo #2575',direlink:'goo.gl/maps/n7GNLyckrTn',correo:'',pagweb:'www.juanmrveterinaria.cl',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Hotel para mascotas',nombre:'La Casa del Can',telfijo1:'2 4459 8001',telfijo2:'',telfijo3:'',celular1:'9 9074 1628',celular2:'',celular3:'',whatsapp1:'+569 9074 1628',whatsapp2:'',direccion:'Departamental #2651',direlink:'goo.gl/maps/e3ESpEKQXZu',correo:'jose_bmo_2@hotmail.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'',efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''}

				  ];

	this.salud=[

				  {sector:'1',servicio:'Gimansio',nombre:'Heavy Training',telfijo1:'2 2684 0971',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'5',direccion:'Calle Rutal #4064 Local 8',direlink:'goo.gl/maps/FSnXYWXE62m',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Podología',nombre:'Ernesta',telfijo1:'2 2233 6655',telfijo2:'',telfijo3:'',celular1:'9 4047 4791',celular2:'',celular3:'',whatsapp1:'+569 4400 1232',whatsapp2:'+569 8635 1615',direccion:'Av Central #6207',direlink:'goo.gl/maps/813Ca5iAavu',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',facelink:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Dentista',nombre:'Dr. Andrés Sandoval',telfijo1:'2 2233 4015',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'',direccion:'4 Poniente #5894',direlink:'goo.gl/maps/ogGQd7yBh5U2',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Personal Trainer',nombre:'Ana Segovia',telfijo1:'2 2522 4921',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'+569 8442 8892',whatsapp2:'+569 8635 1615',direccion:'Angel Guarelo #2575',direlink:'goo.gl/maps/n7GNLyckrTn',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'www.facebook.com/anasegovia',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Kinesiología',nombre:'Kine Salud',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'9 9887 6554',celular2:'',celular3:'',whatsapp1:'+569 7077 7897',whatsapp2:'',direccion:'Departamental #2651',direlink:'goo.gl/maps/e3ESpEKQXZu',correo:'stgo_bmo_2@hotmail.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'',efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''}

				  ];

	this.otros=[

				  {sector:'1',servicio:'Lavado de autos',nombre:'Gran América',telfijo1:'2 2684 0971',telfijo2:'2 2256 4888',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'+569 4878 1523',whatsapp2:'+569 8635 1615',direccion:'Calle Rutal #4064 Local 8',direlink:'goo.gl/maps/FSnXYWXE62m',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Ciber',nombre:'Kratosplay',telfijo1:'2 2333 4848',telfijo2:'',telfijo3:'',celular1:'9 4047 0012',celular2:'',celular3:'',whatsapp1:'+569 4047 4791',whatsapp2:'',direccion:'Av Central #6207',direlink:'goo.gl/maps/813Ca5iAavu',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',facelink:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Entretenciones',nombre:'Flor de Azahar',telfijo1:'2 2589 9947',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'',direccion:'4 Poniente #5894',direlink:'goo.gl/maps/ogGQd7yBh5U2',correo:'',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'' ,efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''},
				  {sector:'1',servicio:'Copia de llaves',nombre:'San Juan',telfijo1:'2 2522 4921',telfijo2:'',telfijo3:'',celular1:'',celular2:'',celular3:'',whatsapp1:'',whatsapp2:'',direccion:'Angel Guarelo #2575',direlink:'goo.gl/maps/n7GNLyckrTn',correo:'',pagweb:'www.laboratoriozaragoza.cl',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'examenes de sangre y orina hormonas bioquimica hemograma'},
				  {sector:'1',servicio:'Hojalateria',nombre:'Jiménez',telfijo1:'',telfijo2:'',telfijo3:'',celular1:'990741628',celular2:'',celular3:'',whatsapp1:'+56990741628',whatsapp2:'+569 8635 1615',direccion:'Departamental #2651',direlink:'goo.gl/maps/e3ESpEKQXZu',correo:'jose_bmo_2@hotmail.com',pagweb:'',instagram:'' ,instalink:'' ,facebook:'',destacado:'',contenido:'',efectivo:'' ,credito:'' ,debito:'' ,cheque:'' ,cajavecina:'' ,cargabip:'' ,promocion:'' ,catalogo:''}

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
