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
// Keep the Input import for now, you'll remove it later:
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var hero_service_1 = require("./hero.service");
var hero_1 = require("./shared/classes/hero");
var HeroLiteComponent = (function () {
    function HeroLiteComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroLiteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id']; // + to cast string to int
        this.heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
        // both are the same  
        //this.route.paramMap
        //    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        //    .subscribe(hero => this.hero = hero);
    };
    HeroLiteComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroLiteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroLiteComponent.prototype, "hero", void 0);
HeroLiteComponent = __decorate([
    core_1.Component({
        selector: 'hero-lite',
        template: "\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div>\n        <label>id: </label>{{hero.id}}\n      </div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n<button (click)=\"goBack()\">Back</button>\n  "
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroLiteComponent);
exports.HeroLiteComponent = HeroLiteComponent;
//# sourceMappingURL=hero-lite.component.js.map