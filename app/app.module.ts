import { NgModule }      from '@angular/core'; // module decoration
import { BrowserModule } from '@angular/platform-browser';//tell angular it will work on browser not desktop or mobile
import { FormsModule }   from '@angular/forms';//validation ,form, two way binding
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],// all modules
  declarations: [ AppComponent,HeroDetailComponent ],//all components
  bootstrap: [AppComponent],//start component
  
})
export class AppModule { }
