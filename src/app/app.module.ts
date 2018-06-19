import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Keyboard } from '@ionic-native/keyboard';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListaPage } from '../pages/lista/lista';
import { DetallePage } from '../pages/detalle/detalle';
import { PopoverPage } from '../pages/popover/popover';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ContactoPage } from '../pages/contacto/contacto';
import { ServiciosPage } from '../pages/servicios/servicios';
import { FaqPage } from '../pages/faq/faq';
import { InicioPage } from '../pages/inicio/inicio';
import { PromocionesPage } from '../pages/promociones/promociones';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListaPage,
    DetallePage,
    PopoverPage,
    TutorialPage,
    ContactoPage,
    ServiciosPage,
    FaqPage,
    InicioPage,
    PromocionesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule, 
    HttpModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListaPage,
    DetallePage,
    PopoverPage,
    TutorialPage,
    ContactoPage,
    ServiciosPage,
    FaqPage,
    InicioPage,
    PromocionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber,
    Keyboard
  ]
})
export class AppModule {}
