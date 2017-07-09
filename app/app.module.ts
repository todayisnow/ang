﻿import { NgModule }      from '@angular/core'; // module decoration
import { BrowserModule } from '@angular/platform-browser';//tell angular it will work on browser not desktop or mobile
import { FormsModule } from '@angular/forms';//validation ,form, two way binding
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';


import { AgePipe } from './shared/pipes/age.pipe';
import { searchPipe } from './shared/pipes/search.pipe';
import { GetNamePurePipe, GetNameImpurePipe } from "./shared/pipes/get-name.pipe";
import { FetchJsonPipe } from './shared/pipes/fetch-json.pipe'

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule ],// all modules
  declarations: [AppComponent, HeroDetailComponent, AgePipe,
      searchPipe, GetNamePurePipe, GetNameImpurePipe,
      FetchJsonPipe],//all components
  bootstrap: [AppComponent],//start component
  
})
export class AppModule { }
