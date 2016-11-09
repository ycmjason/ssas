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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.api_base = 'api/';
    }
    ApiService.prototype.parseQuery = function (query) {
        if (!query || Object.keys(query).length <= 0)
            return '';
        var qs = [];
        for (var key in query) {
            qs.push(key + "=" + query[key]);
        }
        return '?' + qs.join('&');
    };
    ApiService.prototype.get = function (endpoint, query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.api_base + endpoint + _this.parseQuery(query))
                .map(function (res) { return res.json(); })
                .subscribe(function (res) { return resolve(res); });
        });
    };
    ApiService.prototype.post = function (endpoint, query, body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.api_base + endpoint + _this.parseQuery(query), body || {})
                .map(function (res) { return res.json(); })
                .subscribe(function (res) { return resolve(res); });
        });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map