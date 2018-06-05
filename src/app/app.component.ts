import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListaPage } from '../pages/lista/lista';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ContactoPage } from '../pages/contacto/contacto';
import { ServiciosPage } from '../pages/servicios/servicios';
import { FaqPage } from '../pages/faq/faq';
import { InicioPage } from '../pages/inicio/inicio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Servicios', component: ServiciosPage },
      { title: 'Tutorial', component: TutorialPage },
      { title: 'FAQ', component: FaqPage },
      { title: 'Contacto', component: ContactoPage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
