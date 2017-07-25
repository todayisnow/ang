import { NgModule,enableProdMode }      from '@angular/core'; // module decoration
import { BrowserModule } from '@angular/platform-browser';//tell angular it will work on browser not desktop or mobile
import { FormsModule } from '@angular/forms';//validation ,form, two way binding
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroLiteComponent } from './hero-lite.component';
import { HeroesComponent } from "./heroes.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroService } from './hero.service';
import { HeroDetailGuard } from './hero-guard.service';
import { ProductsComponent } from './products/products.component'

import { AgePipe } from './shared/pipes/age.pipe';
import { searchPipe } from './shared/pipes/search.pipe';
import { GetNamePurePipe, GetNameImpurePipe } from "./shared/pipes/get-name.pipe";
import { FetchJsonPipe } from './shared/pipes/fetch-json.pipe'

import { Routes, RouterModule } from '@angular/router';
import {AppRoutingModule } from './app-routing.module'; //


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';




enableProdMode();
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }), AppRoutingModule  ],// all modules
    declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroLiteComponent, ProductsComponent
                 AgePipe,searchPipe, GetNamePurePipe, GetNameImpurePipe, FetchJsonPipe],//all components
  providers: [HeroService,HeroDetailGuard],
  bootstrap: [AppComponent],//start component
  
})
export class AppModule { }
