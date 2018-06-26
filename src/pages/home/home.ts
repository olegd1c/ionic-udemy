import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public users = [];
  private page = 0;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.loadUsers();
    //this.loadUsersVirtual();
  }

  loadUsers(infiniteScroll?) {
    this.http.get('https://randomuser.me/api/?results=20&page=${this.page}')
      .subscribe(res => {
        this.users = this.users.concat(res['results']);

        if(infiniteScroll) {
          infiniteScroll.complete();
        }
      });
  }

  loadMore(infiniteScroll) {
    this.page++;
    this.loadUsers(infiniteScroll);
  }

  loadUsersVirtual(infiniteScroll?) {
    this.http.get('https://randomuser.me/api/?results=200')
      .subscribe(res => {
        this.users = res['results'];
      });
  }
}
