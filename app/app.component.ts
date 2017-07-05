import { Component } from '@angular/core';
import { Hero } from './Hero'
import { Gender } from "./shared/enums";


const HEROES: Hero[] = [
    { id: 11, name: 'Nice', gender: Gender.Male,birthdate:new Date(2011,0,20),salary:2500 },
    { id: 12, name: 'Narco', gender: Gender.Female ,birthdate:new Date(2010,8,20),salary:655.5521 },
    { id: 13, name: 'Bombasto', gender: Gender.Male ,birthdate:new Date(2000,5,13),salary:1255 },
    { id: 14, name: 'Celesritas', gender:null,birthdate:new Date(1987,1,20),salary:250.25 },


];
@Component({
    
    selector: 'my-app',
    moduleId: module.id,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'   
})

export class AppComponent  { 

	title = 'Tour of Heroes';
	heroes  = HEROES;
    selectedHero: Hero;
    GENDER: any = Gender;
    name: string = "Two Way Binding";
	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	  console.log(hero.id)
    }
     
}


