import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
        });
      };
      this._insertFBSDK();
    });
  }
  
  public onFBReady(fn) {
    this.FBPromise.then(fn);
  }

  public getUser(fields='id') {
    return new Promise((resolve, reject) => {
      this.onFBReady((FB) => {
        FB.api('/me', {fields: fields}, (res) => {
          console.log(res);
          if (!res || res.error) {
            console.error(res.error);
            res = null
          }
          resolve(res);
        });
      });
    });
  }

  public login(scope = 'public_profile'){
    return new Promise((resolve, reject) => {
      this.onFBReady((FB) => {
        FB.login((res) => {
          if (res.authResponse) {
            resolve(res);
          }
          else reject(new Error('User cancelled'));
        }, {scope: scope});
      });
    });
  }

  public logout() {
    return new Promise((resolve, reject) => {
      this.onFBReady((FB) => FB.logout(resolve));
    });
  }

}
