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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/interval");
require("rxjs/add/operator/map");
require("rxjs/add/operator/take");
var hero_service_1 = require("./hero.service");
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = [
            'Welcome To',
            'Tour of Heroes'
        ];
        this.resend();
    }
    AppComponent.prototype.resend = function () {
        var _this = this;
        this.title$ = Observable_1.Observable.interval(500)
            .map(function (i) { return _this.title[i]; })
            .take(this.title.length);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getObservableHeroes()
            .subscribe(function (data) { return _this.obHeros = data; }, function (error) { return console.log("error: " + error); });
        //     this.heroService.addHero({ id: 14, name: 'Celesritas', gender: null, birthdate: new Date(2010, 1, 20), salary: 250.25 }).
        //     subscribe(data => console.log("Add at client :" + data), error => console.log("errorClient: " + error));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['./app.component.css'],
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map