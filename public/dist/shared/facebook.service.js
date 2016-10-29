"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var valid_users_1 = require('./valid_users');
console.log(valid_users_1.valid_users);
var fb_app_id = '576619982522568';
var FacebookService = (function () {
    function FacebookService() {
        var _this = this;
        this.FBReady = false;
        this.FBPromise = new Promise(function (resolve, reject) {
            window['fbAsyncInit'] = function () {
                _this._fbAsyncInit();
                // we make sure login status is checked before
                // resolving FB
                FB.getLoginStatus(function (res) {
                    resolve(FB);
                    _this.FBReady = true;
                    console.log('resolved');
                });
            };
            _this._insertFBSDK();
        });
    }
    FacebookService.prototype._fbAsyncInit = function () {
        FB.init({
            appId: fb_app_id,
            version: 'v2.7'
        });
    };
    FacebookService.prototype._insertFBSDK = function () {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    FacebookService.prototype.onFBReady = function (fn) {
        this.FBPromise.then(fn);
    };
    FacebookService.prototype.getUser = function (force, fields) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (fields === void 0) { fields = 'email, name, link'; }
        if (!force) {
            if (this._getUserPromise)
                return this._getUserPromise;
        }
        this._getUserPromise = new Promise(function (resolve, reject) {
            _this.onFBReady(function (FB) {
                FB.api('/me', { fields: fields }, function (res) {
                    if (!res || res.error)
                        return reject();
                    resolve(res);
                });
            });
        });
        return this._getUserPromise;
    };
    FacebookService.prototype.login = function (scope) {
        var _this = this;
        if (scope === void 0) { scope = 'public_profile, email'; }
        return new Promise(function (resolve, reject) {
            _this.onFBReady(function (FB) {
                FB.login(function (res) {
                    if (res.authResponse) {
                        _this.getUser(/* force */ true);
                        resolve(res);
                    }
                    else
                        reject(new Error('User cancelled'));
                }, { scope: scope });
            });
        });
    };
    FacebookService.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.onFBReady(function (FB) {
                FB.logout(function (res) {
                    _this.getUser(/* force */ true);
                    resolve(res);
                });
            });
        });
    };
    FacebookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FacebookService);
    return FacebookService;
}());
exports.FacebookService = FacebookService;
//# sourceMappingURL=facebook.service.js.map