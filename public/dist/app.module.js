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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var material_1 = require('@angular/material');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./components/app.component');
var login_component_1 = require('./components/login.component');
var home_component_1 = require('./components/home.component');
var profile_component_1 = require('./components/profile.component');
var wishlist_component_1 = require('./components/wishlist.component');
var wishlistForm_component_1 = require('./components/wishlistForm.component');
var ifFBReady_directive_1 = require('./directives/ifFBReady.directive');
var facebook_service_1 = require('./shared/facebook.service');
var api_service_1 = require('./shared/api.service');
var wishlist_service_1 = require('./shared/wishlist.service');
var user_service_1 = require('./shared/user.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                material_1.MaterialModule.forRoot(),
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                profile_component_1.ProfileComponent,
                wishlist_component_1.WishlistComponent,
                wishlistForm_component_1.WishlistFormComponent,
                ifFBReady_directive_1.ifFBReadyDirective,
            ],
            providers: [
                facebook_service_1.FacebookService,
                api_service_1.ApiService,
                user_service_1.UserService,
                wishlist_service_1.WishlistService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map