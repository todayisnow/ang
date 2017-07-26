var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { HeroService } from "./hero.service";
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
        this.title$ = Observable.interval(500)
            .map(function (i) { return _this.title[i]; })
            .take(this.title.length);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getObservableHeroes()
            .subscribe(function (data) { return _this.obHeros = data; }, function (error) { return console.log("error: " + error); });
        this.heroService.addHero({ id: 14, name: 'Celesritas', gender: null, birthdate: new Date(2010, 1, 20), salary: 250.25 }).
            subscribe(function (data) { return console.log("Add at client :" + data); }, function (error) { return console.log("errorClient: " + error); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        styleUrls: ['./app.component.css'],
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [HeroService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map