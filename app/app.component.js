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
var gender_enum_1 = require("./shared/enums/gender.enum");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/interval");
require("rxjs/add/operator/map");
require("rxjs/add/operator/take");
var HEROES = [
    { id: 11, name: 'Nice', gender: gender_enum_1.Gender.Male, birthdate: new Date(1987, 0, 20), salary: 2500 },
    { id: 12, name: 'Narco', gender: gender_enum_1.Gender.Female, birthdate: new Date(1990, 8, 20), salary: 655.5521 },
    { id: 13, name: 'Bombasto', gender: gender_enum_1.Gender.Male, birthdate: new Date(1980, 5, 13), salary: 1255 },
    { id: 14, name: 'Celesritas', gender: null, birthdate: new Date(2010, 1, 20), salary: 250.25 },
];
var AppComponent = (function () {
    function AppComponent() {
        this.heroes = HEROES;
        this.GENDER = gender_enum_1.Gender;
        this.obj = {
            name: "Old Obj",
            salary: 333
        };
        this.fileName = "heroes.json";
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
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        console.log(hero.id);
    };
    AppComponent.prototype.changeObject = function () {
        this.obj = {
            name: "New Obj",
            salary: 333
        };
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        styleUrls: ['./app.component.css'],
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map