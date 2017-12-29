import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';


/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
      selector: 'page-popover',
  templateUrl: 'popover.html',
  
})
export class PopoverPage {

  public item;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  this.item = navParams.data;

  }

  close() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
    console.log(this.item);
  }

}
