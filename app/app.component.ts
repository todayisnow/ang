    import { Component } from '@angular/core';
    import { Observable } from 'rxjs/Observable';
    import 'rxjs/add/observable/interval';
    import 'rxjs/add/operator/map';
    import 'rxjs/add/operator/take';


    @Component({
      selector: 'my-app',
      template: `
        <button (click)="resend()">Resend</button>
        <h1>-- {{ title$ | async }} --</h1>
<nav>
<a routerLink="/dashboard">Dashboard</a>        
<a routerLink="/heroes">Heroes</a> 
</nav>
        <router-outlet></router-outlet>
      `
    })
    export class AppComponent {
        title$: Observable<string>;

        private title = [
            'Welcome To',
            'Tour of Heroes'

        ];
        resend() {
            this.title$ = Observable.interval(500)
                .map(i => this.title[i])
                .take(this.title.length);
        }
        constructor() { this.resend();}
    }