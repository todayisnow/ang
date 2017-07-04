import { Component } from '@angular/core';
import { Hero } from './Hero'
import { Gender } from "./shared/enums";


const HEROES: Hero[] = [
    { id: 11, name: 'Nice', gender: Gender.Male },
    { id: 12, name: 'Narco', gender: Gender.Female },
    { id: 13, name: 'Bombasto', gender: Gender.Male },
    { id: 14, name: 'Celesritas', gender:null},


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
    }
     
}


enum types {

}