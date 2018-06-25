import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book } from '../data/quote.inteface'
import qouteData from '../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage  implements OnInit{
  qoutes: Book[];
  qoutesPage = QuotesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.qoutes = qouteData;
  }

  swipe(event) {
    if(event.direction === 4) {
      console.log('4');
      this.navCtrl.parent.select(0);
    }
  }
}
