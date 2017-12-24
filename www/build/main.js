webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallePage = (function () {
    function DetallePage(navCtrl, navParams, call) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.call = call;
        this.item = navParams.get('item');
        this.pet = "promocion";
    }
    DetallePage.prototype.llamar = function (mobNumber) {
        window.open("tel:" + mobNumber);
    };
    DetallePage.prototype.abrirWeb = function (pagina) {
        window.open("http://" + pagina);
    };
    DetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallePage');
    };
    DetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle',template:/*ion-inline-start:"C:\Users\Ignacio\App\ServiApp\src\pages\detalle\detalle.html"*/'<!--\n  Generated template for the DetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n\n  <ion-navbar color="verdeapp" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{item.nombre}}</ion-title> \n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="md-add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-fab right top>\n    <button ion-fab color="light"><ion-icon name="md-arrow-dropleft"></ion-icon></button>\n    <ion-fab-list side="left">\n      <ion-card>\n        <ion-card-header>\n         Medios de pago\n        </ion-card-header>\n        <ion-card-content>\n        Efectivo\n        </ion-card-content>\n        <ion-card-content>\n        Cheque\n        </ion-card-content>\n        <ion-card-content>\n        Débito\n        </ion-card-content>\n        <ion-card-content>\n        Crédito\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-card-header>\n         Otros\n        </ion-card-header>\n        <ion-card-content>\n        Carga bip!\n        </ion-card-content>\n        <ion-card-content>\n        Caja Vecina\n        </ion-card-content>\n      </ion-card>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n  </ion-content>\n\n<ion-content padding>\n  <ion-row>\n    <div col-5>\n        <img src="images/{{item.nombre}}.png">      \n    </div>\n    <div col-7>\n        <div col-12 id="info" class="nombre">\n          {{item.nombre}}\n        </div>\n        <div col-12 id="info">\n          {{item.servicio}}\n        </div>\n        <div col-12 id="info">\n          <ion-icon name="md-pin" color="rojo"></ion-icon> {{item.direccion}}\n        </div>\n    </div>\n  </ion-row>\n\n  <ion-row id="telefono">\n\n    <div col-6 id="numeros" *ngIf="item.telfijo1">\n      <button ion-button icon-left outline color="rojo"  (click)="llamar(item.telfijo1)">\n        <div col-1>\n          <ion-icon name="md-home" color="rojo" id="icono"></ion-icon>\n        </div>\n        <div col-11>\n          {{item.telfijo1}}\n        </div>\n        \n        \n      </button>        \n    </div>\n\n    <div col-6 id="numeros" *ngIf="item.telfijo2">\n      <button ion-button icon-left outline color="rojo"  (click)="llamar(item.telfijo2)">\n        <div col-1>\n          <ion-icon name="md-home" color="rojo" id="icono"></ion-icon>\n        </div>\n         <div col-11>\n          {{item.telfijo2}}\n        </div>\n      </button>       \n    </div>\n\n    <div col-6 id="numeros" *ngIf="item.telfijo3">\n      <button ion-button icon-left outline color="rojo"  (click)="llamar(item.telfijo3)">\n        <div col-1>\n        <ion-icon name="md-home" color="rojo" id="icono"></ion-icon>\n        </div>\n         <div col-11>\n        {{item.telfijo3}}\n        </div>\n      </button>       \n    </div>\n\n    <div col-6 id="numeros" *ngIf="item.celular1">\n      <button ion-button icon-left outline color="naranjo"  (click)="llamar(item.celular1)">\n        <div col-1>\n        <ion-icon name="md-phone-portrait" color="naranjo" id="icono"></ion-icon>\n        </div>\n         <div col-11>\n        {{item.celular1}}\n        </div>\n      </button>        \n    </div>\n\n    <div col-6 id="numeros" *ngIf="item.celular2">\n      <button ion-button icon-left outline color="naranjo"  (click)="llamar(item.celular2)">\n        <div col-1>\n        <ion-icon name="md-phone-portrait" color="naranjo" id="icono"></ion-icon>\n        </div>\n         <div col-11>\n        {{item.celular2}}\n        </div>\n      </button>        \n    </div>\n\n    <div col-6 id="numeros" *ngIf="item.celular3">\n      <button ion-button icon-left outline color="naranjo"  (click)="llamar(item.celular3)">\n        <div col-1>\n        <ion-icon name="md-phone-portrait" color="naranjo" id="icono"></ion-icon>\n        </div>\n         <div col-11>\n        {{item.celular3}}\n        </div>\n      </button>        \n    </div>\n\n    <div col-6 id="numeros" *ngIf="item.whatsapp">\n      <button ion-button icon-left outline color="verde"  (click)="llamar(item.whatsapp)">\n        <div col-1>\n        <ion-icon name="logo-whatsapp" color="verde" id="icono"></ion-icon>\n        </div>\n         <div col-11>\n        {{item.whatsapp}}\n        </div>\n      </button>        \n    </div>\n\n    <div col-6 id="numeros" *ngIf="item.whatsapp">\n      <button ion-button icon-left outline color="verde"  (click)="llamar(item.whatsapp)">\n        <div col-1>\n        <ion-icon name="logo-whatsapp" color="verde" id="icono"></ion-icon>\n        </div>\n         <div col-11>\n        {{item.whatsapp}}\n        </div>\n      </button>        \n    </div>\n    \n  </ion-row>\n\n\n  <div id="divbotones">\n  <ion-row id="rowbotones">\n  <div col-2 *ngIf="item.facebook" (click)="abrirWeb(item.facelink)"><img src="https://i62.servimg.com/u/f62/12/00/31/40/facebo10.png"></div>\n  <div col-2 *ngIf="item.instagram" (click)="abrirWeb(item.instalink)"><img src="https://i62.servimg.com/u/f62/12/00/31/40/instag10.png"></div>\n  <div col-2 *ngIf="item.pagweb" (click)="abrirWeb(item.pagweb)"><img src="https://i62.servimg.com/u/f62/12/00/31/40/web10.png"></div>\n  <div col-2 *ngIf="item.correo" (click)="abrirWeb(item.pagweb)"><img src="https://i62.servimg.com/u/f62/12/00/31/40/email10.png"></div>\n  <div col-2 *ngIf="item.direccion" (click)="abrirWeb(item.direlink)"><img src="https://i62.servimg.com/u/f62/12/00/31/40/direcc10.png"></div>\n  </ion-row>\n  </div>\n\n<div id="segment">\n  <ion-segment color="dark" [(ngModel)]="pet">\n    <ion-segment-button value="promocion">\n      Promoción\n    </ion-segment-button>\n    <ion-segment-button value="catalogo">\n      Catálogo\n    </ion-segment-button>\n  </ion-segment>\n\n</div>\n\n  <div [ngSwitch]="pet">\n  <ion-list *ngSwitchCase="\'promocion\'">\n  \n    <ion-slides pager>\n\n  <ion-slide>\n    <img src="https://i.kinja-img.com/gawker-media/image/upload/s--nuwIKL3_--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/wxyubkjmeppxmqasllft.jpg">\n  </ion-slide>\n\n  <ion-slide>\n    <img src="https://i.kinja-img.com/gawker-media/image/upload/s--nuwIKL3_--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/wxyubkjmeppxmqasllft.jpg">\n  </ion-slide>\n\n  <ion-slide>\n    <img src="https://i.kinja-img.com/gawker-media/image/upload/s--nuwIKL3_--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/wxyubkjmeppxmqasllft.jpg">\n  </ion-slide>\n\n</ion-slides>\n\n\n\n\n  </ion-list>\n \n  <ion-list *ngSwitchCase="\'catalogo\'" >\n    <ion-content id="listaprecio"> \n    <ion-list id="vamos">\n      <ion-item>Yakizoba<ion-note item-end id="precio">\n      $25.360\n      </ion-note></ion-item>\n      <ion-item>Angola<ion-note item-end id="precio">\n      $25.360\n      </ion-note></ion-item>\n      <ion-item>Angola<ion-note item-end id="precio">\n      $25.360\n      </ion-note></ion-item>\n      <ion-item>Angola<ion-note item-end id="precio">\n      $25.360\n      </ion-note></ion-item>\n      <ion-item>Angola<ion-note item-end id="precio">\n      $25.360\n      </ion-note></ion-item>\n      <ion-item>Angola<ion-note item-end id="precio">\n      $25.360\n      </ion-note></ion-item>\n      <ion-item>Angola<ion-note item-end id="precio">\n      $25.360\n      </ion-note></ion-item>\n    </ion-list>\n    </ion-content>\n  </ion-list>\n\n</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Ignacio\App\ServiApp\src\pages\detalle\detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], DetallePage);
    return DetallePage;
}());

//# sourceMappingURL=detalle.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_detalle__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaPage = (function () {
    function ListaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comida = [
            { comuna: 'PAC', servicio: 'Sushi', nombre: 'naki', telfijo1: '2 2555 5555', telfijo2: '', telfijo3: '', celular1: '986351615', celular2: '986351615', celular3: '', whatsapp: '+56986351615', direccion: 'Alameda #5057', direlink: 'goo.gl/maps/zhzoMJaNKT32', correo: '', pagweb: 'www.serviapp.cl', facebook: 'ServiAPP', facelink: 'www.facebook.com/serviappchile', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Pizzería', nombre: 'Pepe Jhons', telfijo1: '2 2555 5555', telfijo2: '', telfijo3: '', celular1: '9 8442 8891', celular2: '9 8635 1615', celular3: '', whatsapp: '+569 8635 1615', instagram: 'PepeJhon', instalink: 'www.instagram.com/pepejhon', direccion: 'Alameda #5057', direlink: 'goo.gl/maps/zhzoMJaNKT32', correo: 'contacto@pepejhon.cl', pagweb: 'www.pepejhon.cl', facebook: 'ServiApp', facelink: 'www.facebook.com/serviappchile', destacado: 'si', contenido: '' },
            { comuna: 'PAC', servicio: 'Veterinaria', nombre: 'mascotas', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '986351615', celular2: '986351615', celular3: '', whatsapp: '+56945774106', direccion: 'Av Lopez Mateos #02546', direlink: 'goo.gl/maps/Nyy2njhZXGu', correo: '', pagweb: '', facebook: 'ServiAPP', facelink: 'www.facebook.com/serviappchile', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Servicio Tecnico', nombre: 'servi', telfijo1: '227032606', telfijo2: '', telfijo3: '', celular1: '950652159', celular2: '', celular3: '', whatsapp: '+56950652159', direccion: 'Av Departamental #2585', direlink: 'goo.gl/maps/QsmbbCfAM5w', correo: 'distribuidoradeviayasosiados@gmail.com', pagweb: '', facebook: '', destacado: 'si', contenido: 'igualacion de colores masillas lijas diluyente poliuretano' },
            { comuna: 'Lo Espejo', servicio: 'Taxi', nombre: 'taxidriver', telfijo1: '2232285457', telfijo2: '', telfijo3: '', celular1: '995311507', celular2: '', celular3: '', whatsapp: '+56995311507', direccion: 'Clotario Blest #6583', direlink: 'goo.gl/maps/2TSUbTSoKkL2', correo: 'loovalle2017@gmail.com', pagweb: 'www.serviapp.cl', facebook: '', facelink: '', destacado: '', contenido: '' }
        ];
        this.serviciotecnico = [
            { comuna: 'PAC', servicio: 'Optica', nombre: 'Opticas Leper', telfijo1: '224095321', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: 'Av Salvador allende #03137', direlink: 'goo.gl/maps/2SuWHq65Ly52', correo: 'opticasleper@gmail.com', pagweb: '', facebook: '', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Consulta Oftalmologica', nombre: 'OpticaBelen', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '977187018', celular2: '972138614', celular3: '', whatsapp: '+56977187018', direccion: 'Av.Lazo #1980', direlink: 'goo.gl/maps/11V8GGfzeLn', correo: 'optica_belen@hotmail.com', pagweb: '', facebook: 'Optica-Belen', facelink: 'www.facebook.com/Optica-Belen-1780891798793782', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Veterinaria', nombre: 'Huella Animal', telfijo1: '225238394', telfijo2: '', telfijo3: '', celular1: '975723765', celular2: '', celular3: '', whatsapp: '', direccion: 'Av Ovalle #3558', direlink: 'goo.gl/maps/YTHFL7deHXH2', correo: '', pagweb: '', facebook: '', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Clinica Dental', nombre: 'Multisonrisas', telfijo1: '228669392', telfijo2: '232297396', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: 'Av Central #6328', direlink: 'goo.gl/maps/2egTckkMPHv', correo: '', pagweb: '', facebook: '', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Pizzeria y Sushi', nombre: 'Valdivia s', telfijo1: '229040325', telfijo2: '', telfijo3: '', celular1: '987524147', celular2: '', celular3: '', whatsapp: '+56987524147', direccion: 'Av Central #5892', direlink: 'goo.gl/maps/5PQLqFwM4JC2', correo: '', pagweb: '', facebook: '', facelink: '', destacado: '', contenido: '' }
        ];
        this.transporte = [
            { comuna: 'PAC', servicio: 'Restaurant', nombre: 'El Gran Paso', telfijo1: '226840971', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: 'Calle Rutal #4064 Local 8', direlink: 'goo.gl/maps/FSnXYWXE62m', correo: '', pagweb: '', facebook: '', destacado: '', contenido: '' },
            { comuna: 'Lo Espejo', servicio: 'Lavado de Autos', nombre: 'Colombia', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '940474791', celular2: '', celular3: '', whatsapp: '+56940474791', direccion: 'Av Central #6207', direlink: 'goo.gl/maps/813Ca5iAavu', correo: '', pagweb: '', facebook: '', facelink: '', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Entretenciones', nombre: 'Zumo', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: '4 Poniente #5894', direlink: 'goo.gl/maps/ogGQd7yBh5U2', correo: '', pagweb: '', facebook: '', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Laboratorio Clinico', nombre: 'Zaragoza', telfijo1: '225224921', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: 'Angel Guarelo #2575', direlink: 'goo.gl/maps/n7GNLyckrTn', correo: '', pagweb: 'www.laboratoriozaragoza.cl', facebook: '', destacado: '', contenido: 'examenes de sangre y orina hormonas bioquimica hemograma' },
            { comuna: 'PAC', servicio: 'Hojalateria', nombre: 'Hojalateria', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '990741628', celular2: '', celular3: '', whatsapp: '+56990741628', direccion: 'Departamental #2651', direlink: 'goo.gl/maps/e3ESpEKQXZu', correo: 'jose_bmo_2@hotmail.com', pagweb: '', facebook: '', destacado: '', contenido: '' }
        ];
        this.ferreteria = [
            { comuna: 'PAC', servicio: 'Restaurant', nombre: 'El Gran Paso', telfijo1: '226840971', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: 'Calle Rutal #4064 Local 8', direlink: 'goo.gl/maps/FSnXYWXE62m', correo: '', pagweb: '', facebook: '', destacado: '', contenido: '' },
            { comuna: 'Lo Espejo', servicio: 'Lavado de Autos', nombre: 'Colombia', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '940474791', celular2: '', celular3: '', whatsapp: '+56940474791', direccion: 'Av Central #6207', direlink: 'goo.gl/maps/813Ca5iAavu', correo: '', pagweb: '', facebook: '', facelink: '', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Entretenciones', nombre: 'Zumo', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: '4 Poniente #5894', direlink: 'goo.gl/maps/ogGQd7yBh5U2', correo: '', pagweb: '', facebook: '', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Laboratorio Clinico', nombre: 'Zaragoza', telfijo1: '225224921', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: 'Angel Guarelo #2575', direlink: 'goo.gl/maps/n7GNLyckrTn', correo: '', pagweb: 'www.laboratoriozaragoza.cl', facebook: '', destacado: '', contenido: 'examenes de sangre y orina hormonas bioquimica hemograma' },
            { comuna: 'PAC', servicio: 'Hojalateria', nombre: 'Hojalateria', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '990741628', celular2: '', celular3: '', whatsapp: '+56990741628', direccion: 'Departamental #2651', direlink: 'goo.gl/maps/e3ESpEKQXZu', correo: 'jose_bmo_2@hotmail.com', pagweb: '', facebook: '', destacado: '', contenido: '' }
        ];
        this.peluqueria = [
            { comuna: 'PAC', servicio: 'Restaurant', nombre: 'El Gran Paso', telfijo1: '226840971', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: 'Calle Rutal #4064 Local 8', direlink: 'goo.gl/maps/FSnXYWXE62m', correo: '', pagweb: '', facebook: '', destacado: '', contenido: '' },
            { comuna: 'Lo Espejo', servicio: 'Lavado de Autos', nombre: 'Colombia', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '940474791', celular2: '', celular3: '', whatsapp: '+56940474791', direccion: 'Av Central #6207', direlink: 'goo.gl/maps/813Ca5iAavu', correo: '', pagweb: '', facebook: '', facelink: '', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Entretenciones', nombre: 'Zumo', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: '4 Poniente #5894', direlink: 'goo.gl/maps/ogGQd7yBh5U2', correo: '', pagweb: '', facebook: '', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Laboratorio Clinico', nombre: 'Zaragoza', telfijo1: '225224921', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: 'Angel Guarelo #2575', direlink: 'goo.gl/maps/n7GNLyckrTn', correo: '', pagweb: 'www.laboratoriozaragoza.cl', facebook: '', destacado: '', contenido: 'examenes de sangre y orina hormonas bioquimica hemograma' },
            { comuna: 'PAC', servicio: 'Hojalateria', nombre: 'Hojalateria', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '990741628', celular2: '', celular3: '', whatsapp: '+56990741628', direccion: 'Departamental #2651', direlink: 'goo.gl/maps/e3ESpEKQXZu', correo: 'jose_bmo_2@hotmail.com', pagweb: '', facebook: '', destacado: '', contenido: '' }
        ];
        this.otros = [
            { comuna: 'PAC', servicio: 'Restaurant', nombre: 'El Gran Paso', telfijo1: '226840971', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: 'Calle Rutal #4064 Local 8', direlink: 'goo.gl/maps/FSnXYWXE62m', correo: '', pagweb: '', facebook: '', destacado: '', contenido: '' },
            { comuna: 'Lo Espejo', servicio: 'Lavado de Autos', nombre: 'Colombia', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '940474791', celular2: '', celular3: '', whatsapp: '+56940474791', direccion: 'Av Central #6207', direlink: 'goo.gl/maps/813Ca5iAavu', correo: '', pagweb: '', facebook: '', facelink: '', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Entretenciones', nombre: 'Zumo', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: '4 Poniente #5894', direlink: 'goo.gl/maps/ogGQd7yBh5U2', correo: '', pagweb: '', facebook: '', destacado: '', contenido: '' },
            { comuna: 'PAC', servicio: 'Laboratorio Clinico', nombre: 'Zaragoza', telfijo1: '225224921', telfijo2: '', telfijo3: '', celular1: '', celular2: '', celular3: '', whatsapp: '', direccion: 'Angel Guarelo #2575', direlink: 'goo.gl/maps/n7GNLyckrTn', correo: '', pagweb: 'www.laboratoriozaragoza.cl', facebook: '', destacado: '', contenido: 'examenes de sangre y orina hormonas bioquimica hemograma' },
            { comuna: 'PAC', servicio: 'Hojalateria', nombre: 'Hojalateria', telfijo1: '', telfijo2: '', telfijo3: '', celular1: '990741628', celular2: '', celular3: '', whatsapp: '+56990741628', direccion: 'Departamental #2651', direlink: 'goo.gl/maps/e3ESpEKQXZu', correo: 'jose_bmo_2@hotmail.com', pagweb: '', facebook: '', destacado: '', contenido: '' }
        ];
    }
    ListaPage.prototype.goToDetalle = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detalle_detalle__["a" /* DetallePage */], {
            item: item
        });
    };
    ListaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaPage');
    };
    ListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista',template:/*ion-inline-start:"C:\Users\Ignacio\App\ServiApp\src\pages\lista\lista.html"*/'<!--\n  Generated template for the ListaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="verdeapp">\n    <ion-title>Servicios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n	<div id="destacado">\n		<ion-item-divider>DESTACADOS</ion-item-divider>\n	</div>\n	\n	<div *ngFor="let item of comida">\n		<ion-item  *ngIf="item.destacado" (click)="goToDetalle(item)"   >\n	      <ion-thumbnail item-start >\n	        <img src="images/{{item.nombre}}.png"  >\n	      </ion-thumbnail>\n	      <h2>{{ item.nombre }}</h2 >\n	      <h3>{{ item.servicio }}</h3 >\n	      <h2>{{ item.whatsapp }}</h2 >\n	      <p>{{ item.direccion }}</p >\n	      <ion-icon name="ios-call" color="verde" item-end></ion-icon>\n	    </ion-item>\n	    </div>\n	    </ion-list>\n\n	<ion-list>\n	    <ion-item   *ngFor="let item of comida" (click)="goToDetalle(item)" >\n	      <ion-thumbnail item-start >\n	        <img src="images/{{item.nombre}}.png">\n	      </ion-thumbnail>\n	      <h2>{{ item.nombre }}</h2>\n	      <h3>{{ item.servicio }}</h3>\n	      <h2>{{ item.whatsapp }}</h2>\n	      <p>{{ item.direccion }}</p>\n	    </ion-item>\n	  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ignacio\App\ServiApp\src\pages\lista\lista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListaPage);
    return ListaPage;
}());

//# sourceMappingURL=lista.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detalle/detalle.module": [
		282,
		1
	],
	"../pages/lista/lista.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_lista__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__lista_lista__["a" /* ListaPage */];
        this.params = "comida";
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.goToLista = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lista_lista__["a" /* ListaPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ignacio\App\ServiApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="verdeapp">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Categorías</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="card-background-page">\n\n  <ion-row id="cate">\n\n    <div col-6>\n      <ion-card (click)="goToLista()">\n        <img src="images/fondos/comida.jpg"/>\n        <div class="card-title">COMIDA</div>\n        <div class="card-subtitle">Sushi - Pizeria - Delivery</div>\n      </ion-card>\n    </div>\n\n    <div col-6>\n      <ion-card (click)="goToLista()">\n        <img src="images/fondos/serviciotecnico.jpg"/>\n        <div class="card-title">TÉCNICO</div>\n        <div class="card-subtitle">Gásfiter - Eléctrico - Computación</div>\n      </ion-card>\n    </div>\n   \n  </ion-row>\n\n  <ion-row id="cate">\n    <div col-6>\n      <ion-card (click)="goToLista()">\n        <img src="images/fondos/transporte.jpg"/>\n        <div class="card-title">TRANSPORTE</div>\n        <div class="card-subtitle">Radio Taxi - Fletes - Mudanzas</div>\n      </ion-card>\n    </div>\n    <div col-6>\n      <ion-card (click)="goToLista()">\n        <img src="images/fondos/belleza.jpg"/>\n        <div class="card-title">BELLEZA</div>\n        <div class="card-subtitle">Peluquería - Podología - Masajes</div>\n      </ion-card>\n    </div>\n  </ion-row>\n\n  <ion-row id="cate">\n    <div col-6>\n      <ion-card (click)="goToLista()">\n        <img src="images/fondos/mascotas.jpg"/>\n        <div class="card-title">MASCOTAS</div>\n        <div class="card-subtitle">Veterinaria - Peluquería - Alimentos</div>\n      </ion-card>\n    </div>\n    <div col-6> \n      <ion-card (click)="goToLista()">\n        <img src="images/fondos/negocios.jpg"/>\n        <div class="card-title">NEGOCIOS</div>\n        <div class="card-subtitle">Almacén - Ferretería - Aseo</div>\n      </ion-card>\n    </div>\n  </ion-row>\n\n  <ion-row id="cate">\n    <div col-6>\n      <ion-card (click)="goToLista()">\n        <img src="images/fondos/salud.jpg"/>\n        <div class="card-title">SALUD</div>\n        <div class="card-subtitle">Gimnasio - Farmacia - Médico</div>\n      </ion-card>\n    </div>\n    <div col-6>\n      <ion-card (click)="goToLista()">\n        <img src="images/fondos/otros.jpg"/>\n        <div class="card-title">OTROS</div>\n        <div class="card-subtitle"></div>\n      </ion-card>\n    </div>\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ignacio\App\ServiApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_lista_lista__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detalle_detalle__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detalle_detalle__["a" /* DetallePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detalle/detalle.module#DetallePageModule', name: 'DetallePage', segment: 'detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista/lista.module#ListaPageModule', name: 'ListaPage', segment: 'lista', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detalle_detalle__["a" /* DetallePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Categorías', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Servicios', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Ignacio\App\ServiApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="dark">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Ignacio\App\ServiApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Ignacio\App\ServiApp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Servicios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ignacio\App\ServiApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map