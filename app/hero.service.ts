
import { Injectable } from '@angular/core';
import { Hero } from './shared/classes/hero'
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { GetHeroes, PostHeroes } from './webapi'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

@Injectable() //emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
export class HeroService {
    constructor(private http: Http)
    {

    }
    getHeroes(): Promise<Hero[]> {

        return Promise.resolve(HEROES);
       
        
    }
    addHero(hero: Hero): Observable<any> {
        let body = JSON.stringify(hero);
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(PostHeroes, body, options)
            .map(data => {
               
                return data.json();
            })
            .catch((x: Response) => x.json());
    }
    // stub
    getObservableHeroes(): Observable<Hero[]>
    {
        // return this.http.get('./heroes2.json')
        return this.http.get(GetHeroes)
            .map(heroes => <Hero[]>heroes.json())
            .catch((x: Response) =>  x.json() );

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

