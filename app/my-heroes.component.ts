import { Component,OnInit } from '@angular/core';
import { Hero } from './shared/classes/hero'
import { Gender } from "./shared/enums/gender.enum";
import { HeroService } from "./hero.service";





@Component({
    
    selector: 'my-heroes',
    moduleId: module.id,
    styleUrls: ['./my-heroes.component.css'],
    templateUrl: './my-heroes.component.html'
   
})

export class HeroesComponent implements OnInit {
       
  
    subTitle :string = "My Hero"
	heroes :Hero[];
    selectedHero: Hero;
    GENDER: any = Gender;
    searchKey: string;

    obj: MyObject = {
        name: "Old Obj",
        salary: 333
    };
    fileName: string = "heroes.json";



    
    
    constructor(private heroService: HeroService) { 
        
       
    }
    
    ngOnInit(): void {
        this.heroService.getHeroesSlowly().then(heros => this.heroes = heros);
        
    }
   


    setSubTitle(subT: string):void
    {
        this.subTitle = subT;
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


