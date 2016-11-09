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
var router_1 = require('@angular/router');
var user_service_1 = require('../shared/user.service');
var wishlist_service_1 = require('../shared/wishlist.service');
var HomeComponent = (function () {
    function HomeComponent(router, userService, wishlistService) {
        this.router = router;
        this.userService = userService;
        this.wishlistService = wishlistService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().then(function (u) {
            if (!u)
                return _this.router.navigate(['/login']);
            _this.user = u;
            _this.wishlistService.getWishlist(u._id).then(function (wishes) {
                _this.wishes = wishes;
            });
        });
        this.userService.getAllocation().then(function (to) {
            if (!to)
                return;
            _this.master = to;
        });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/components/home.component.html',
            styles: [".center{\n    text-align: center\n    }\n    section{\n      margin: 1em;\n    }"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, wishlist_service_1.WishlistService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map