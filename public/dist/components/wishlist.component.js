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
var wishlist_service_1 = require('../shared/wishlist.service');
var WishlistComponent = (function () {
    function WishlistComponent(router, wishlistService) {
        this.router = router;
        this.wishlistService = wishlistService;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.title || this.user.name + "'s wishes";
        this.wishlistService.getWishlist(this.user._id).then(function (wishes) {
            _this.wishes = wishes;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WishlistComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WishlistComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WishlistComponent.prototype, "subtitle", void 0);
    WishlistComponent = __decorate([
        core_1.Component({
            selector: 'ssas-wishlist',
            templateUrl: 'app/components/wishlist.component.html',
            styles: ["ol{\n    margin: 0;\n    }"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, wishlist_service_1.WishlistService])
    ], WishlistComponent);
    return WishlistComponent;
}());
exports.WishlistComponent = WishlistComponent;
//# sourceMappingURL=wishlist.component.js.map