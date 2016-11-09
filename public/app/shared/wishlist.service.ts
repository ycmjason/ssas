import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { UserService } from './user.service';

@Injectable()
export class WishlistService {
  constructor(private api: ApiService,
              private user: UserService) { }

  public getWishlist(id) {
    return this.api.get(`users/${id}/wishlist`);
  }

  public createWishlist(wishes) {
    return new Promise((resolve, reject) => {
      this.user.getUser().then(u => {
        if(!u) return reject(u);
        this.api.post(`users/${u._id}/wishlist`, {}, {wishes: wishes}).then(resolve).catch(reject);
      });
    });
  }

}
