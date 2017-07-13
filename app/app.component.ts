    import { Component, OnInit } from '@angular/core';
    import { Observable } from 'rxjs/Observable';
    import 'rxjs/add/observable/interval';
    import 'rxjs/add/operator/map';
    import 'rxjs/add/operator/take';
    import { Hero } from "./shared/classes/hero";
    import { HeroService } from "./hero.service";


    @Component({
      selector: 'my-app',
      styleUrls: ['./app.component.css'],
      templateUrl: './app.component.html'
    })
    export class AppComponent implements OnInit {
           

        title$: Observable<string>;
        obHeros:Hero[]
        private title = [
            'Welcome To',
            'Tour of Heroes'

        ];
        resend() {
            this.title$ = Observable.interval(500)
                .map(i => this.title[i])
                .take(this.title.length);
        }
        constructor(private heroService: HeroService) { this.resend(); }
        ngOnInit(): void {
            this.heroService.getObservableHeroes()
                .subscribe(data => this.obHeros = data, error => console.log("error: "+error));
            

   
        }
    }