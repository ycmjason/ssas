import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { valid_users } from './valid_users';

console.log(valid_users);

declare var FB:any;

const fb_app_id = '576619982522568';

@Injectable()
export class FacebookService {
  public FBReady = false;
  private FBPromise;

  private _fbAsyncInit() {
    FB.init({
      appId      : fb_app_id,
      version    : 'v2.8'
    });
  }

  private _insertFBSDK() {
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  constructor() {
    this.FBPromise = new Promise((resolve, reject) => {
      window['fbAsyncInit'] = () => {
        this._fbAsyncInit();
        // we make sure login status is checked before
        // resolving FB
        FB.getLoginStatus((res) => {
          resolve(FB);
          this.FBReady = true;
          console.log('resolved');
        });
      };
      this._insertFBSDK();
    });
  }
  
  public onFBReady(fn) {
    this.FBPromise.then(fn);
  }

  private _getUserPromise;
  public getUser(force=false, fields='email, name, link') {
    if(!force) {
      if(this._getUserPromise) return this._getUserPromise;
    }

    this._getUserPromise = new Promise((resolve, reject) => {
      this.onFBReady((FB) => {
        FB.api('/me', {fields: fields}, (res) => {
          if (!res || res.error) return reject();

          resolve(res);
        });
      });
    });

    return this._getUserPromise;
  }

  public login(scope = 'public_profile, email'){
    return new Promise((resolve, reject) => {
      this.onFBReady((FB) => {
        FB.login((res) => {
          if (res.authResponse) {
            this.getUser(/* force */ true);
            resolve(res);
          }
          else reject(new Error('User cancelled'));
        }, {scope: scope});
      });
    });
  }

  public logout() {
    return new Promise((resolve, reject) => {
      this.onFBReady((FB) => {
        FB.logout((res) => {
          this.getUser(/* force */ true);
          resolve(res);
        });
      });
    });
  }

}
