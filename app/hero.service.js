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
var core_1 = require("@angular/core");
var mock_heroes_1 = require("./mock-heroes");
var webapi_1 = require("./webapi");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var http_1 = require("@angular/http");
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    HeroService.prototype.addHero = function (hero) {
        var body = JSON.stringify(hero);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(webapi_1.PostHeroes, body, options)
            .map(function (data) {
            console.log("PostData: ", data.json());
            return data.json();
        })
            .catch(function (x) { return x.json(); });
    };
    // stub
    HeroService.prototype.getObservableHeroes = function () {
        // return this.http.get('./heroes2.json')
        return this.http.get(webapi_1.GetHeroes)
            .map(function (heroes) { return heroes.json(); })
            .catch(function (x) { return x.json(); });
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
        });
    };
    HeroService.prototype.getHero = function (id) {
        return Promise.resolve(mock_heroes_1.HEROES.find(function (hero) { return hero.id === id; }));
        //return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable() //emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
    ,
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map