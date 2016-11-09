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
var api_service_1 = require('./api.service');
var user_service_1 = require('./user.service');
var WishlistService = (function () {
    function WishlistService(api, user) {
        this.api = api;
        this.user = user;
    }
    WishlistService.prototype.getWishlist = function (id) {
        return this.api.get("users/" + id + "/wishlist");
    };
    WishlistService.prototype.createWishlist = function (wishes) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.user.getUser().then(function (u) {
                if (!u)
                    return reject(u);
                _this.api.post("users/" + u._id + "/wishlist", {}, { wishes: wishes }).then(resolve).catch(reject);
            });
        });
    };
    WishlistService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService, user_service_1.UserService])
    ], WishlistService);
    return WishlistService;
}());
exports.WishlistService = WishlistService;
//# sourceMappingURL=wishlist.service.js.map