import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuotesService } from '../../services/qoutes';
import { Quote } from '../data/quote.inteface';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  private qoutes: Quote[] = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWiilEnter() {
    console.log('ionViewWiilEnter');
    this.quotesService.getFavoriteQoutes();
    //console.log(this.quotesService.getFavoriteQoutes());
  }
}
