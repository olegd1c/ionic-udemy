import { Quote } from '../pages/data/quote.inteface';

export class QuotesService {

    private favoriteQoutes: Quote[] = [];

    addQuoteToFavorites(qoute: Quote) {
        this.favoriteQoutes.push(qoute);
    }

    removeQuoteFromFavorites(qoute: Quote) {
        const index = this.favoriteQoutes.findIndex((elem: Quote) => {
            return elem.id == qoute.id;
        })
        this.favoriteQoutes.splice(index);
    }

    getFavoriteQuotes() {
        return this.favoriteQoutes.slice();
    }

    isQuoteFavorite(quote: Quote): any {
        return this.favoriteQoutes.find((elem: Quote) => {
            return elem.id == quote.id;
        });
    }
}
