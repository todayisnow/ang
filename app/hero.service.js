var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { GetHeroes, PostHeroes } from './webapi';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Http, Headers, RequestOptions } from '@angular/http';
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(HEROES);
    };
    HeroService.prototype.addHero = function (hero) {
        var body = JSON.stringify(hero);
        var headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(PostHeroes, body, options)
            .map(function (data) {
            return data.json();
        })
            .catch(function (x) { return x.json(); });
    };
    // stub
    HeroService.prototype.getObservableHeroes = function () {
        // return this.http.get('./heroes2.json')
        return this.http.get(GetHeroes)
            .map(function (heroes) { return heroes.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
        });
    };
    HeroService.prototype.getHero = function (id) {
        return Promise.resolve(HEROES.find(function (hero) { return hero.id === id; }));
        //return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    };
    return HeroService;
}());
HeroService = __decorate([
    Injectable() //emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
    ,
    __metadata("design:paramtypes", [Http])
], HeroService);
export { HeroService };
//# sourceMappingURL=hero.service.js.map