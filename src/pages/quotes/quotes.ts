import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Book, Quote } from '../data/quote.inteface';
import { QuotesService } from '../../services/qoutes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  item: Book;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService,

  ) { }

  ngOnInit(): void {
    this.item = this.navParams.data;
  }

  /*
  // add (?) in template  
  ionViewDidLoad() {
    this.item = this.navParams.data;
  }
  */

  addToFavorite(qoute: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Qoute!',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the qoute?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.quotesService.addQouteToFavorites(qoute);
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No');
          }
        },
      ]
    });
    alert.present();
  }
}
