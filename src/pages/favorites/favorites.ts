import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import { QuotesService } from '../../services/qoutes';
import { SettingsService } from '../../services/settings';
import { Quote } from '../data/quote.inteface';
import {QuotePage} from "../quotes/quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  public quotes: Quote[] = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService
  ) {}

  ionViewWillEnter() {
    
    this.getGuotes();
  }

  private getGuotes() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.quotesService.removeQuoteFromFavorites(quote);
        this.getGuotes();
      }
    })
  }

  swipe(event) {
    if(event.direction === 2) {
      console.log('2');
      this.navCtrl.parent.select(1);
    }
  }
  getBackground() {
    return this.settingsService.isAltBackround() ? 'altQouteBackground' : 'qouteBackground';
  }

  isAltBackground() {
    return this.settingsService.isAltBackround();
  }
}
