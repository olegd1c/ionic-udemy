import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private iab: InAppBrowser) {
    const browser = this.iab.create('http://ukt.net/','_self','location=no');
    browser.show();
  }
}
