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
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { HeroService } from './hero.service';
import { Hero } from './shared/classes/hero';
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
    Input(),
    __metadata("design:type", Hero)
], HeroLiteComponent.prototype, "hero", void 0);
HeroLiteComponent = __decorate([
    Component({
        selector: 'hero-lite',
        template: "\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div>\n        <label>id: </label>{{hero.id}}\n      </div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n<button (click)=\"goBack()\">Back</button>\n  "
    }),
    __metadata("design:paramtypes", [HeroService,
        ActivatedRoute,
        Location])
], HeroLiteComponent);
export { HeroLiteComponent };
//# sourceMappingURL=hero-lite.component.js.map