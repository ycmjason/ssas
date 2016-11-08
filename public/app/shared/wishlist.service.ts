import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { UserService } from './user.service';

@Injectable()
export class WishlistService {
  constructor(private api: ApiService,
              private user: UserService) { }

  private _wishlistPromise;

  public getWishlist() {
    this._wishlistPromise = this._wishlistPromise || new Promise((resolve, reject) => {
      this.user.getUser().then(u => {
        this.api.get(`${u.id}/wishlist`).then(resolve).catch(reject);
      });
    });
    return this._wishlistPromise;
  }

  public createWishlist(wishes) {
    return new Promise((resolve, reject) => {
      this.user.getUser().then(u => {
        this.api.post(`${u.id}/wishlist`).then(resolve).catch(reject);
      });
    });
  }

}
