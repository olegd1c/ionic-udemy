import { Component } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';
import { QuotesPage } from '../quotes/quotes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FavoritesPage;
  tab2Root = LibraryPage;

  constructor() {

  }
}
