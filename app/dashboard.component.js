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
var hero_service_1 = require("./hero.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var DashboardComponent = (function () {
    function DashboardComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(0, 2); });
        //  this.data = this.route        .data        .subscribe(v=>console.log("Data from route: "+v.title));
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        styleUrls: ['./dashboard.component.css'],
        templateUrl: './dashboard.component.html'
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.ActivatedRoute])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
var ExternalData = (function () {
    function ExternalData() {
    }
    return ExternalData;
}());
exports.ExternalData = ExternalData;
//# sourceMappingURL=dashboard.component.js.map