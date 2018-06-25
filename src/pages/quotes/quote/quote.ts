import { Component } from '@angular/core';
import {NavParams, ViewController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  public person: string;
  public text: string;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    public navCtrl: NavController,
  ) {}

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
