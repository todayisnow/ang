import { Component } from '@angular/core';
import { Hero } from './shared/classes/hero'
import { Gender } from "./shared/enums/gender.enum";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


const HEROES: Hero[] = [
    { id: 11, name: 'Nice', gender: Gender.Male,birthdate:new Date(1987,0,20),salary:2500 },
    { id: 12, name: 'Narco', gender: Gender.Female ,birthdate:new Date(1990,8,20),salary:655.5521 },
    { id: 13, name: 'Bombasto', gender: Gender.Male ,birthdate:new Date(1980,5,13),salary:1255 },
    { id: 14, name: 'Celesritas', gender:null,birthdate:new Date(2010,1,20),salary:250.25 },


];
@Component({
    
    selector: 'my-app',
    moduleId: module.id,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'   
})

export class AppComponent  { 
    
  
    
	heroes  = HEROES;
    selectedHero: Hero;
    GENDER: any = Gender;
    searchKey: string;

    obj: MyObject = {
        name: "Old Obj",
        salary: 333
    };
    fileName: string = "heroes.json";
title$: Observable<string>;

    private title = [
        'Welcome To',
        'Tour of Heroes'    
        
    ];
    constructor() { this.resend(); }

    resend() {
        this.title$ = Observable.interval(500)
            .map(i => this.title[i])
            .take(this.title.length);
    } 

	onSelect(hero: Hero): void {
        this.selectedHero = hero;
        
	  console.log(hero.id)
    }
    changeObject()
    {
        
        this.obj = {
            name: "New Obj",
            salary: 333
        };

    }
     
}

export interface MyObject {
    name: string;
    salary: number;
} 


