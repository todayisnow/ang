"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var heroes_component_1 = require("./heroes.component");
var hero_lite_component_1 = require("./hero-lite.component");
var products_component_1 = require("./products/products.component");
var hero_guard_service_1 = require("./hero-guard.service");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, data: { title: 'MyData' } },
    { path: 'detail/:id', canActivate: [hero_guard_service_1.HeroDetailGuard], component: hero_lite_component_1.HeroLiteComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'products', component: products_component_1.ProductsComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map