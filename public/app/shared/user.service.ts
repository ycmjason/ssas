import { Injectable } from '@angular/core';

import { FacebookService } from './facebook.service';
import { ApiService } from './api.service';

@Injectable()
export class UserService {
  constructor(private api: ApiService,
              private fb: FacebookService) { }

  private _userPromise;

  private _getUserFromApi(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`users/${id}`).then(resolve);
    });
  }

  private _resetUserPromise() {
    this._userPromise = undefined;
  }
  
  public login() {
    return new Promise((resolve, reject) => {
      this.fb.login().then((res) => {
        this._resetUserPromise();
        this.getUser().then(resolve)
      });
    });
  }

  public logout() {
    return this.fb.logout().then(() => this._resetUserPromise());;
  }

  public getUser() {
    this._userPromise = this._userPromise || new Promise((resolve, reject) => {
      this.fb.getUser().then((u: any) => {
        if(!u) return resolve(u);
        this._getUserFromApi(u.id).then(resolve);
      });
    });
    return this._userPromise;
  }

  public getAllocation() {
    return new Promise((resolve, reject) => {
      this.getUser().then((u: any) => {
        if(!u) return reject();
        this.api.get(`users/${u._id}/allocation`).then(resolve);
      });
    });
  }
}
