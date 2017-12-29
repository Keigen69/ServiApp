webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(103);
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
    function DetallePage(navCtrl, navParams, call, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.call = call;
        this.popoverCtrl = popoverCtrl;
        this.item = navParams.get('item');
        this.pet = "promocion";
    }
    DetallePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
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
            selector: 'page-detalle',template:/*ion-inline-start:"C:\Users\Ignacio\App\ServiApp\src\pages\detalle\detalle.html"*/'<!--\n\n  Generated template for the DetallePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="verdeapp" >\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{item.nombre}}</ion-title> \n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="presentPopover($event)">\n\n        <ion-icon name="md-help"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <div col-5>\n\n        <img src="images/logos/{{item.nombre}}.png">      \n\n    </div>\n\n    <div col-7>\n\n        <div col-12 id="info" class="nombre">\n\n          {{item.nombre}}\n\n        </div>\n\n        <div col-12 id="info">\n\n          {{item.servicio}}\n\n        </div>\n\n        <div col-12 id="info">\n\n          <ion-icon name="md-pin" color="rojo"></ion-icon> {{item.direccion}}\n\n        </div>\n\n    </div>\n\n  </ion-row>\n\n\n\n  <ion-row id="telefono">\n\n\n\n    <div col-6 id="numeros" *ngIf="item.telfijo1">\n\n      <button ion-button icon-left outline color="rojo"  (click)="llamar(item.telfijo1)">\n\n        <div col-1>\n\n          <ion-icon name="md-home" color="rojo" id="icono"></ion-icon>\n\n        </div>\n\n        <div col-11>\n\n          {{item.telfijo1}}\n\n        </div>\n\n        \n\n        \n\n      </button>        \n\n    </div>\n\n\n\n    <div col-6 id="numeros" *ngIf="item.telfijo2">\n\n      <button ion-button icon-left outline color="rojo"  (click)="llamar(item.telfijo2)">\n\n        <div col-1>\n\n          <ion-icon name="md-home" color="rojo" id="icono"></ion-icon>\n\n        </div>\n\n         <div col-11>\n\n          {{item.telfijo2}}\n\n        </div>\n\n      </button>       \n\n    </div>\n\n\n\n    <div col-6 id="numeros" *ngIf="item.telfijo3">\n\n      <button ion-button icon-left outline color="rojo"  (click)="llamar(item.telfijo3)">\n\n        <div col-1>\n\n        <ion-icon name="md-home" color="rojo" id="icono"></ion-icon>\n\n        </div>\n\n         <div col-11>\n\n        {{item.telfijo3}}\n\n        </div>\n\n      </button>       \n\n    </div>\n\n\n\n    <div col-6 id="numeros" *ngIf="item.celular1">\n\n      <button ion-button icon-left outline color="naranjo"  (click)="llamar(item.celular1)">\n\n        <div col-1>\n\n        <ion-icon name="md-phone-portrait" color="naranjo" id="icono"></ion-icon>\n\n        </div>\n\n         <div col-11>\n\n        {{item.celular1}}\n\n        </div>\n\n      </button>        \n\n    </div>\n\n\n\n    <div col-6 id="numeros" *ngIf="item.celular2">\n\n      <button ion-button icon-left outline color="naranjo"  (click)="llamar(item.celular2)">\n\n        <div col-1>\n\n        <ion-icon name="md-phone-portrait" color="naranjo" id="icono"></ion-icon>\n\n        </div>\n\n         <div col-11>\n\n        {{item.celular2}}\n\n        </div>\n\n      </button>        \n\n    </div>\n\n\n\n    <div col-6 id="numeros" *ngIf="item.celular3">\n\n      <button ion-button icon-left outline color="naranjo"  (click)="llamar(item.celular3)">\n\n        <div col-1>\n\n        <ion-icon name="md-phone-portrait" color="naranjo" id="icono"></ion-icon>\n\n        </div>\n\n         <div col-11>\n\n        {{item.celular3}}\n\n        </div>\n\n      </button>        \n\n    </div>\n\n\n\n    <div col-6 id="numeros" *ngIf="item.whatsapp">\n\n      <button ion-button icon-left outline color="verde"  (click)="llamar(item.whatsapp)">\n\n        <div col-1>\n\n        <ion-icon name="logo-whatsapp" color="verde" id="icono"></ion-icon>\n\n        </div>\n\n         <div col-11>\n\n        {{item.whatsapp}}\n\n        </div>\n\n      </button>        \n\n    </div>\n\n\n\n    <div col-6 id="numeros" *ngIf="item.whatsapp">\n\n      <button ion-button icon-left outline color="verde"  (click)="llamar(item.whatsapp)">\n\n        <div col-1>\n\n        <ion-icon name="logo-whatsapp" color="verde" id="icono"></ion-icon>\n\n        </div>\n\n         <div col-11>\n\n        {{item.whatsapp}}\n\n        </div>\n\n      </button>        \n\n    </div>\n\n    \n\n  </ion-row>\n\n\n\n\n\n  <div id="divbotones">\n\n  <ion-row id="rowbotones">\n\n  <div col-2 *ngIf="item.facebook" (click)="abrirWeb(item.facelink)"><img src="/images/iconos/facebook.png"></div>\n\n  <div col-2 *ngIf="item.instagram" (click)="abrirWeb(item.instalink)"><img src="https://i62.servimg.com/u/f62/12/00/31/40/instag10.png"></div>\n\n  <div col-2 *ngIf="item.pagweb" (click)="abrirWeb(item.pagweb)"><img src="https://i62.servimg.com/u/f62/12/00/31/40/web10.png"></div>\n\n  <div col-2 *ngIf="item.correo" (click)="abrirWeb(item.pagweb)"><img src="https://i62.servimg.com/u/f62/12/00/31/40/email10.png"></div>\n\n  <div col-2 *ngIf="item.direccion" (click)="abrirWeb(item.direlink)"><img src="https://i62.servimg.com/u/f62/12/00/31/40/direcc10.png"></div>\n\n  </ion-row>\n\n  </div>\n\n\n\n<div id="segment">\n\n  <ion-segment [(ngModel)]="pet" id="promo"  color="negro">\n\n    <ion-segment-button value="promocion" id=palabrapromo>\n\n      Promoción\n\n    </ion-segment-button>\n\n    <ion-segment-button value="catalogo" id=palabrapromo>\n\n      Catálogo\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n</div>\n\n\n\n  <div [ngSwitch]="pet">\n\n  <ion-list *ngSwitchCase="\'promocion\'">\n\n      <ion-slides pager>\n\n\n\n        <ion-slide>\n\n          <img src="https://i.kinja-img.com/gawker-media/image/upload/s--nuwIKL3_--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/wxyubkjmeppxmqasllft.jpg">\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <img src="https://i.kinja-img.com/gawker-media/image/upload/s--nuwIKL3_--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/wxyubkjmeppxmqasllft.jpg">\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <img src="https://i.kinja-img.com/gawker-media/image/upload/s--nuwIKL3_--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/wxyubkjmeppxmqasllft.jpg">\n\n        </ion-slide>\n\n\n\n      </ion-slides>\n\n  </ion-list>\n\n \n\n  <ion-list *ngSwitchCase="\'catalogo\'">\n\n    <ion-content id="listaprecio"> \n\n    <ion-list id="vamos">\n\n      <ion-item>Yakizoba<ion-note item-end id="precio">\n\n      $25.360\n\n      </ion-note></ion-item>\n\n      <ion-item>Angola<ion-note item-end id="precio">\n\n      $25.360\n\n      </ion-note></ion-item>\n\n      <ion-item>Angola<ion-note item-end id="precio">\n\n      $25.360\n\n      </ion-note></ion-item>\n\n      <ion-item>Angola<ion-note item-end id="precio">\n\n      $25.360\n\n      </ion-note></ion-item>\n\n      <ion-item>Angola<ion-note item-end id="precio">\n\n      $25.360\n\n      </ion-note></ion-item>\n\n      <ion-item>Angola<ion-note item-end id="precio">\n\n      $25.360\n\n      </ion-note></ion-item>\n\n      <ion-item>Angola<ion-note item-end id="precio">\n\n      $25.360\n\n      </ion-note></ion-item>\n\n    </ion-list>\n\n    </ion-content>\n\n  </ion-list>\n\n\n\n</div>\n\n\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Ignacio\App\ServiApp\src\pages\detalle\detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], DetallePage);
    return DetallePage;
}());

//# sourceMappingURL=detalle.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = (function () {
    function PopoverPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"C:\Users\Ignacio\App\ServiApp\src\pages\popover\popover.html"*/'<!--\n\n  Generated template for the PopoverPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-card-header id="titulo2">\n\n    <ion-title><h2 id="titulo">Servicios Extras</h2></ion-title>\n\n</ion-card-header>\n\n\n\n<div id="cuerpo">\n\n	<ion-card id="todo">\n\n	  <ion-card-header id="metodos">\n\n	    Métodos de pago\n\n	  </ion-card-header>\n\n\n\n	  <ion-card-content id="cajas">\n\n	  	<ion-row id="filas">\n\n		  	<div col-2>\n\n			    <img id="iconos" src="images/metodos/efectivo.png"> \n\n		    </div>\n\n		    <div col-4 id="elementos">\n\n				Efectivo\n\n			</div>\n\n\n\n			<div col-2>\n\n			    <img id="iconos" src="images/metodos/cheque.png">\n\n		  	</div>\n\n		  	<div col-4 id="elementos">\n\n		  		Cheque\n\n		  	</div>\n\n		</ion-row>\n\n\n\n		<ion-row id="filas">\n\n		  <div col-2>\n\n			    <img id="iconos" src="images/metodos/credito.png"> \n\n		    </div>\n\n		    <div col-4 id="elementos">\n\n				Crédito\n\n			</div>\n\n\n\n			<div col-2>\n\n			    <img id="iconos" src="images/metodos/debito.png">\n\n		  	</div>\n\n		  	<div col-4 id="elementos">\n\n		  		Débito\n\n		  	</div>\n\n	    </ion-row>\n\n	  </ion-card-content>\n\n\n\n	</ion-card>\n\n\n\n	<ion-card id="todo">\n\n	  <ion-card-header id="metodos">\n\n	    Otros servicios\n\n	  </ion-card-header>\n\n\n\n	  <ion-card-content id="cajas">\n\n	  	<ion-row id="filas">\n\n		  	<div col-2>\n\n			    <img id="iconos" src="images/metodos/bip.png"> \n\n		    </div>\n\n		    <div col-4 id="elementos">\n\n				Carga Bip!\n\n			</div>\n\n\n\n			<div col-2>\n\n			    <img id="iconos" src="images/metodos/serviestado.png">\n\n		  	</div>\n\n		  	<div col-4 id="elementos">\n\n		  		Caja Vecina\n\n		  	</div>\n\n		</ion-row>\n\n\n\n		<ion-row id="filas">\n\n		  	<div col-2>\n\n			    <img id="iconos" src="images/metodos/multicaja.png"> \n\n		    </div>\n\n		    <div col-4 id="elementos">\n\n				Multicaja\n\n			</div>\n\n		</ion-row>\n\n	  </ion-card-content>\n\n\n\n	</ion-card>\n\n\n\n</div>'/*ion-inline-end:"C:\Users\Ignacio\App\ServiApp\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_detalle__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
    function ListaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.aux = "";
        this.item = navParams.get('item');
        console.log(this.item);
    }
    ListaPage.prototype.goToDetalle = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detalle_detalle__["a" /* DetallePage */], {
            item: item
        });
    };
    ListaPage.prototype.valor = function () {
        for (var _i = 0, _a = this.item.clientes; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("entro al for");
            console.log(i.destacado);
            if (i.destacado)
                this.aux = "si";
        }
        console.log(this.aux);
        return this.aux;
    };
    ListaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaPage');
    };
    ListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista',template:/*ion-inline-start:"C:\Users\Ignacio\App\ServiApp\src\pages\lista\lista.html"*/'<!--\n\n  Generated template for the ListaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="verdeapp">\n\n    <ion-title>Servicios</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n	<div *ngIf="valor()">\n\n	<ion-list id="destacado2" >\n\n		<div id="destacado">\n\n			<ion-item-divider >DESTACADOS</ion-item-divider>\n\n		</div>\n\n			<div *ngFor="let in of item.clientes">\n\n				<ion-item (click)="goToDetalle(in)" *ngIf="in.destacado">\n\n			      <ion-thumbnail item-start >\n\n			        <img src="images/logos/{{in.nombre}}.png">\n\n			      </ion-thumbnail>\n\n			      <h2>{{ in.nombre }}</h2 >\n\n			      <h3>{{ in.servicio }}</h3 >\n\n			      <p>{{ in.direccion }}</p >\n\n			      <ion-icon name="ios-call" color="verde" item-end></ion-icon>\n\n			    </ion-item>\n\n		    </div>\n\n	</ion-list>\n\n	</div>\n\n\n\n\n\n	<ion-list>\n\n	    <ion-item *ngFor="let in of item.clientes" (click)="goToDetalle(in)" >\n\n	      <ion-thumbnail item-start >\n\n	        <img src="images/logos/{{in.nombre}}.png">\n\n	      </ion-thumbnail>\n\n	      <h2>{{ in.nombre }}</h2>\n\n	      <h3>{{ in.servicio }}</h3>\n\n	      <h2>{{ in.whatsapp }}</h2>\n\n	      <p>{{ in.direccion }}</p>\n\n	    </ion-item>\n\n	  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ignacio\App\ServiApp\src\pages\lista\lista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], ListaPage);
    return ListaPage;
}());

//# sourceMappingURL=lista.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detalle/detalle.module": [
		284,
		2
	],
	"../pages/lista/lista.module": [
		285,
		1
	],
	"../pages/popover/popover.module": [
		286,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lista_lista__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
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
    function HomePage(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.posts = null;
        this.http.get('http://serviapp.cl/recursos/DB1.json').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.categorias;
            _this.comida = _this.posts[0].comida;
            _this.serviciotecnico = _this.posts[1].serviciotecnico;
            _this.transporte = _this.posts[2].transporte;
            _this.negocios = _this.posts[3].negocios;
            _this.belleza = _this.posts[4].belleza;
            _this.mascotas = _this.posts[5].mascotas;
            _this.salud = _this.posts[6].salud;
            _this.otros = _this.posts[7].otros;
            console.log(_this.posts);
            console.log(_this.comida);
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.goToListaComida = function (comi) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__lista_lista__["a" /* ListaPage */], {
            item: comi
        });
    };
    HomePage.prototype.goToListaTecnico = function (servi) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__lista_lista__["a" /* ListaPage */], {
            item: servi
        });
    };
    HomePage.prototype.goToListaTran = function (tran) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__lista_lista__["a" /* ListaPage */], {
            item: tran
        });
    };
    HomePage.prototype.goToListaBelle = function (belle) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__lista_lista__["a" /* ListaPage */], {
            item: belle
        });
    };
    HomePage.prototype.goToListaMasco = function (masco) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__lista_lista__["a" /* ListaPage */], {
            item: masco
        });
    };
    HomePage.prototype.goToListaNego = function (nego) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__lista_lista__["a" /* ListaPage */], {
            item: nego
        });
    };
    HomePage.prototype.goToListaSal = function (sal) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__lista_lista__["a" /* ListaPage */], {
            item: sal
        });
    };
    HomePage.prototype.goToListaOtr = function (otr) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__lista_lista__["a" /* ListaPage */], {
            item: otr
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ignacio\App\ServiApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="verdeapp">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Categorías</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n  <ion-row id="cate">\n\n\n\n    <div col-6 *ngFor="let comi of comida">\n\n      <ion-card (click)="goToListaComida(comi)">\n\n        <img src="images/fondos/comida.jpg"/>\n\n        <div class="card-title">{{comi.tipo}}</div>\n\n        <div class="card-subtitle">{{comi.subtitulo}}</div>\n\n      </ion-card>\n\n    </div>\n\n\n\n    <div col-6 *ngFor="let servi of serviciotecnico">\n\n      <ion-card (click)="goToListaTecnico(servi)">\n\n        <img src="images/fondos/serviciotecnico.jpg"/>\n\n        <div class="card-title">{{servi.tipo}}</div>\n\n        <div class="card-subtitle">{{servi.subtitulo}}</div>\n\n      </ion-card>\n\n    </div>\n\n   \n\n  </ion-row>\n\n\n\n  <ion-row id="cate">\n\n    <div col-6 *ngFor="let tran of transporte">\n\n      <ion-card (click)="goToListaTran(tran)">\n\n        <img src="images/fondos/transporte.jpg"/>\n\n        <div class="card-title">{{tran.tipo}}</div>\n\n        <div class="card-subtitle">{{tran.subtitulo}}</div>\n\n      </ion-card>\n\n    </div>\n\n    <div col-6 *ngFor="let belle of belleza">\n\n      <ion-card (click)="goToListaBelle(belle)">\n\n        <img src="images/fondos/belleza.jpg"/>\n\n        <div class="card-title">{{belle.tipo}}</div>\n\n        <div class="card-subtitle">{{belle.subtitulo}}</div>\n\n      </ion-card>\n\n    </div>\n\n  </ion-row>\n\n\n\n  <ion-row id="cate">\n\n    <div col-6 *ngFor="let masco of mascotas">\n\n      <ion-card (click)="goToListaMasco(masco)">\n\n        <img src="images/fondos/mascotas.jpg"/>\n\n        <div class="card-title">{{masco.tipo}}</div>\n\n        <div class="card-subtitle">{{masco.subtitulo}}</div>\n\n      </ion-card>\n\n    </div>\n\n    <div col-6 *ngFor="let nego of negocios"> \n\n      <ion-card (click)="goToListaNego(nego)">\n\n        <img src="images/fondos/negocios.jpg"/>\n\n        <div class="card-title">{{nego.tipo}}</div>\n\n        <div class="card-subtitle">{{nego.subtitulo}}</div>\n\n      </ion-card>\n\n    </div>\n\n  </ion-row>\n\n\n\n  <ion-row id="cate">\n\n    <div col-6 *ngFor="let sal of salud">\n\n      <ion-card (click)="goToListaSal(sal)">\n\n        <img src="images/fondos/salud.jpg"/>\n\n        <div class="card-title">{{sal.tipo}}</div>\n\n        <div class="card-subtitle">{{sal.subtitulo}}</div>\n\n      </ion-card>\n\n    </div>\n\n    <div col-6 *ngFor="let otr of otros">\n\n      <ion-card (click)="goToListaOtr(otr)">\n\n        <img src="images/fondos/otros.jpg"/>\n\n        <div class="card-title">{{otr.tipo}}</div>\n\n        <div class="card-subtitle"></div>\n\n      </ion-card>\n\n    </div>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Ignacio\App\ServiApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_lista_lista__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detalle_detalle__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_popover_popover__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_call_number__ = __webpack_require__(159);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_popover_popover__["a" /* PopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detalle/detalle.module#DetallePageModule', name: 'DetallePage', segment: 'detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista/lista.module#ListaPageModule', name: 'ListaPage', segment: 'lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_popover_popover__["a" /* PopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Ignacio\App\ServiApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="dark">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Ignacio\App\ServiApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Ignacio\App\ServiApp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Servicios</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ignacio\App\ServiApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map