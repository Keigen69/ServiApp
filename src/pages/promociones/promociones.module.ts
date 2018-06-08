import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromocionesPage } from './promociones';

@NgModule({
  declarations: [
    PromocionesPage,
  ],
  imports: [
    IonicPageModule.forChild(PromocionesPage),
  ],
})
export class PromocionesPageModule {}
