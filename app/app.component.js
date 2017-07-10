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
var AppComponent = (function () {
    function AppComponent() {
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <button (click)=\"resend()\">Resend</button>\n        <h1>-- {{ title$ | async }} --</h1>\n<nav>\n<a routerLink=\"/dashboard\">Dashboard</a>        \n<a routerLink=\"/heroes\">Heroes</a> \n</nav>\n        <router-outlet></router-outlet>\n      "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map