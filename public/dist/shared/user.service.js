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
var facebook_service_1 = require('./facebook.service');
var api_service_1 = require('./api.service');
var UserService = (function () {
    function UserService(api, fb) {
        this.api = api;
        this.fb = fb;
    }
    UserService.prototype._getUserFromApi = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.get("users/" + id).then(resolve);
        });
    };
    UserService.prototype._resetUserPromise = function () {
        this._userPromise = undefined;
    };
    UserService.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fb.login().then(function (res) {
                _this._resetUserPromise();
                _this.getUser().then(resolve);
            });
        });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        return this.fb.logout().then(function () { return _this._resetUserPromise(); });
        ;
    };
    UserService.prototype.getUser = function () {
        var _this = this;
        this._userPromise = this._userPromise || new Promise(function (resolve, reject) {
            _this.fb.getUser().then(function (u) {
                if (!u)
                    return resolve(u);
                _this._getUserFromApi(u.id).then(resolve);
            });
        });
        return this._userPromise;
    };
    UserService.prototype.getAllocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getUser().then(function (u) {
                if (!u)
                    return reject();
                _this.api.get("users/" + u._id + "/allocation").then(resolve);
            });
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService, facebook_service_1.FacebookService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map