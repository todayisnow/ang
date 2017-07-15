import { NgModule }      from '@angular/core'; // module decoration
import { BrowserModule } from '@angular/platform-browser';//tell angular it will work on browser not desktop or mobile
import { FormsModule } from '@angular/forms';//validation ,form, two way binding
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroLiteComponent } from './hero-lite.component';
import { HeroesComponent } from "./heroes.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroService } from './hero.service';

import { AgePipe } from './shared/pipes/age.pipe';
import { searchPipe } from './shared/pipes/search.pipe';
import { GetNamePurePipe, GetNameImpurePipe } from "./shared/pipes/get-name.pipe";
import { FetchJsonPipe } from './shared/pipes/fetch-json.pipe'

import { Routes, RouterModule } from '@angular/router';
import {AppRoutingModule } from './app-routing.module' //


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule  ],// all modules
    declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroLiteComponent,
                 AgePipe,searchPipe, GetNamePurePipe, GetNameImpurePipe, FetchJsonPipe],//all components
  providers: [HeroService],
  bootstrap: [AppComponent],//start component
  
})
export class AppModule { }
