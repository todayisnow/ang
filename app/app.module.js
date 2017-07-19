var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core'; // module decoration
import { BrowserModule } from '@angular/platform-browser'; //tell angular it will work on browser not desktop or mobile
import { FormsModule } from '@angular/forms'; //validation ,form, two way binding
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroLiteComponent } from './hero-lite.component';
import { HeroesComponent } from "./heroes.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroService } from './hero.service';
import { AgePipe } from './shared/pipes/age.pipe';
import { searchPipe } from './shared/pipes/search.pipe';
import { GetNamePurePipe, GetNameImpurePipe } from "./shared/pipes/get-name.pipe";
import { FetchJsonPipe } from './shared/pipes/fetch-json.pipe';
import { AppRoutingModule } from './app-routing.module'; //
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
        declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroLiteComponent,
            AgePipe, searchPipe, GetNamePurePipe, GetNameImpurePipe, FetchJsonPipe],
        providers: [HeroService],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map