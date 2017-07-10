
import { Injectable } from '@angular/core';
import { Hero } from './shared/classes/hero'
import { HEROES } from './mock-heroes';

@Injectable() //emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
export class HeroService {
    getHeroes(): Promise<Hero[]> {

        return Promise.resolve(HEROES);
       
        
    } // stub
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}

