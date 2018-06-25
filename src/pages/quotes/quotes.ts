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
 
  addToFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote!',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.quotesService.addQuoteToFavorites(quote);
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {

          }
        },
      ]
    });
    alert.present();
  }

  removeFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

  swipe(event) {
    if(event.direction === 4) {
      console.log('4');
      this.navCtrl.parent.select(1);
    }
  }
}
