"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var enums_1 = require("./shared/enums");
var HEROES = [
    { id: 11, name: 'Nice', gender: enums_1.Gender.Male },
    { id: 12, name: 'Narco', gender: enums_1.Gender.Female },
    { id: 13, name: 'Bombasto', gender: enums_1.Gender.Male },
    { id: 14, name: 'Celesritas', gender: null },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
        this.GENDER = enums_1.Gender;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        styleUrls: ['./app.component.css'],
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
var types;
(function (types) {
})(types || (types = {}));
//# sourceMappingURL=app.component.js.map