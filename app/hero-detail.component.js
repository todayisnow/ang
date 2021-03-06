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
var hero_1 = require("./shared/classes/hero");
var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
        this.dateType = 0;
        this.asIf = new Date(2020, 1, 1).getTime();
        this.sendSubTitle = new core_1.EventEmitter();
    }
    HeroDetailComponent.prototype.onSendSubTitle = function () {
        this.sendSubTitle.emit("My " + this.hero.name);
    };
    HeroDetailComponent.prototype.whatAge = function () {
        if (!this.asIf) {
            this.asIf = new Date(2020, 1, 1).getTime();
            document.getElementById("whatAge").innerHTML = "Get Current Age";
        }
        else {
            this.asIf = null;
            document.getElementById("whatAge").innerHTML = "Get Future Age";
        }
    };
    HeroDetailComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HeroDetailComponent.prototype, "sendSubTitle", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        moduleId: "./app/",
        templateUrl: './hero-detail.component.html'
    })
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map