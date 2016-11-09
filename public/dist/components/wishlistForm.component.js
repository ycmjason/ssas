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
var WishlistFormComponent = (function () {
    function WishlistFormComponent(router, wishlistService) {
        this.router = router;
        this.wishlistService = wishlistService;
        this.wishesMade = new core_1.EventEmitter();
        this.wishes = [];
        this._eg_items = [
            'something red!',
            'no books at all please!',
            'alcohol related stuff!',
            'scented candles',
            'shocks',
        ].map(function (i) { return 'I wish to have ' + i; });
        this.examples = 'Examples: ' + this._eg_items.map(function (i) { return ("<i>" + i + "</i>"); }).join(', ');
    }
    WishlistFormComponent.prototype._badSubmission = function () {
        this.message = "Please make sure you fill all three wishes.";
    };
    WishlistFormComponent.prototype.submit = function () {
        var _this = this;
        var wishes = this.wishes.map(function (w) { return w.trim(); });
        if (wishes.filter(function (w) { return !!w; }).length !== 3)
            return this._badSubmission();
        this.wishlistService.createWishlist(wishes).then(function (wishes) { return _this.wishesMade.emit(wishes); });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WishlistFormComponent.prototype, "wishesMade", void 0);
    WishlistFormComponent = __decorate([
        core_1.Component({
            selector: 'ssas-wishlist-form',
            templateUrl: 'app/components/wishlistForm.component.html',
            styles: ["\n  md-input{\n    width: 100%;\n  }"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, wishlist_service_1.WishlistService])
    ], WishlistFormComponent);
    return WishlistFormComponent;
}());
exports.WishlistFormComponent = WishlistFormComponent;
//# sourceMappingURL=wishlistForm.component.js.map