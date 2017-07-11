
import { Injectable } from '@angular/core';
import { Hero } from './shared/classes/hero'
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http'

@Injectable() //emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
export class HeroService {
    constructor(private http: Http)
    {

    }
    getHeroes(): Promise<Hero[]> {

        return Promise.resolve(HEROES);
       
        
    }
    // stub
    getObservableHeroes(): Observable<Hero[]>
    {
        return this.http.get('./heroes.json').map(heroes => <Hero[]>heroes.json());
    }


    getHeroesSlowly(): Promise<Hero[]> {


        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id: number): Promise<Hero> {
        return Promise.resolve(HEROES.find(hero => hero.id === id))
            //return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}

