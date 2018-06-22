import { Quote } from '../pages/data/quote.inteface';

export class QuotesService {
    private favoriteQoutes: Quote[] = [];

    addQouteToFavorites(qoute: Quote) {
        this.favoriteQoutes.push(qoute);
        console.log(this.favoriteQoutes);
    }

    removeQouteFromFavorites(qoute: Quote) {
        const index = this.favoriteQoutes.findIndex((elem: Quote) => {
            return elem.id == qoute.id;
        })
        this.favoriteQoutes.splice(index);
    }

    getFavoriteQoutes() {
        console.log(this.favoriteQoutes.slice());
        return this.favoriteQoutes.slice();
    }
}