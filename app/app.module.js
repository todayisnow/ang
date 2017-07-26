"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core"); // module decoration
var platform_browser_1 = require("@angular/platform-browser"); //tell angular it will work on browser not desktop or mobile
var forms_1 = require("@angular/forms"); //validation ,form, two way binding
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_lite_component_1 = require("./hero-lite.component");
var heroes_component_1 = require("./heroes.component");
var dashboard_component_1 = require("./dashboard.component");
var hero_service_1 = require("./hero.service");
var hero_guard_service_1 = require("./hero-guard.service");
var age_pipe_1 = require("./shared/pipes/age.pipe");
var search_pipe_1 = require("./shared/pipes/search.pipe");
var get_name_pipe_1 = require("./shared/pipes/get-name.pipe");
var fetch_json_pipe_1 = require("./shared/pipes/fetch-json.pipe");
var app_routing_module_1 = require("./app-routing.module"); //
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var product_module_1 = require("./products/product.module");
core_1.enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, product_module_1.ProductModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { delay: 1000 }), app_routing_module_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, hero_detail_component_1.HeroDetailComponent, heroes_component_1.HeroesComponent, dashboard_component_1.DashboardComponent, hero_lite_component_1.HeroLiteComponent,
            age_pipe_1.AgePipe, search_pipe_1.searchPipe, get_name_pipe_1.GetNamePurePipe, get_name_pipe_1.GetNameImpurePipe, fetch_json_pipe_1.FetchJsonPipe],
        providers: [hero_service_1.HeroService, hero_guard_service_1.HeroDetailGuard],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map