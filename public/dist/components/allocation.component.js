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
var AllocationComponent = (function () {
    function AllocationComponent(router, userService, wishlistService) {
        this.router = router;
        this.userService = userService;
        this.wishlistService = wishlistService;
    }
    AllocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllocation().then(function (u) {
            if (!u)
                return _this.router.navigate(['/home']);
            _this.to = u;
            _this.wishlistService.getWishlist(u._id).then(function (wishes) {
                _this.wishes = wishes;
            });
        });
    };
    AllocationComponent = __decorate([
        core_1.Component({
            selector: 'ssas-allocation',
            templateUrl: 'app/components/allocation.component.html',
            styles: [
                ".flex-container{\n    padding: 0;\n    margin: 0;\n    list-style: none;\n\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n\n    -webkit-flex-flow: row wrap;\n    justify-content: space-around;\n    }",
                ".flex-item{\n    flex-grow: 1;\n  }"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, wishlist_service_1.WishlistService])
    ], AllocationComponent);
    return AllocationComponent;
}());
exports.AllocationComponent = AllocationComponent;
//# sourceMappingURL=allocation.component.js.map