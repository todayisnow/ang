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
var core_1 = require("@angular/core"); // module decoration
var platform_browser_1 = require("@angular/platform-browser"); //tell angular it will work on browser not desktop or mobile
var forms_1 = require("@angular/forms"); //validation ,form, two way binding
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var hero_detail_component_1 = require("./hero-detail.component");
var age_pipe_1 = require("./shared/pipes/age.pipe");
var search_pipe_1 = require("./shared/pipes/search.pipe");
var get_name_pipe_1 = require("./shared/pipes/get-name.pipe");
var fetch_json_pipe_1 = require("./shared/pipes/fetch-json.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, hero_detail_component_1.HeroDetailComponent, age_pipe_1.AgePipe,
            search_pipe_1.searchPipe, get_name_pipe_1.GetNamePurePipe, get_name_pipe_1.GetNameImpurePipe,
            fetch_json_pipe_1.FetchJsonPipe],
        bootstrap: [app_component_1.AppComponent],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map