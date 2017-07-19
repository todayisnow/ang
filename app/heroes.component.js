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
import { Gender } from "./shared/enums/gender.enum";
import { HeroService } from "./hero.service";
import { Router } from "@angular/router";
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.subTitle = "My Hero";
        this.GENDER = Gender;
        this.obj = {
            name: "Old Obj",
            salary: 333
        };
        this.fileName = "heroes.json";
    }
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroesSlowly().then(function (heros) { return _this.heroes = heros; });
    };
    HeroesComponent.prototype.setSubTitle = function (subT) {
        this.subTitle = subT;
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        console.log(hero.id);
    };
    HeroesComponent.prototype.changeObject = function () {
        this.obj = {
            name: "New Obj",
            salary: 333
        };
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    Component({
        selector: 'my-heroes',
        //moduleId: module.id,
        styleUrls: ['./heroes.component.css'],
        templateUrl: './heroes.component.html'
    }),
    __metadata("design:paramtypes", [HeroService, Router])
], HeroesComponent);
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map