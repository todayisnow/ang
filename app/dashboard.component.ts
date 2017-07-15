import { Component, OnInit } from '@angular/core';
import { Hero } from './shared/classes/hero';
import { HeroService } from './hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
    selector: 'my-dashboard',
    styleUrls: ['./dashboard.component.css'],
    templateUrl : './dashboard.component.html'

})
export class DashboardComponent implements OnInit {
    data: any;
 heroes: Hero[] = [];

 constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
          .then(heroes => this.heroes = heroes.slice(0, 2));
    this.data = this.route
        .data
        .subscribe(v=>console.log("Data from route: "+v.title));
  }
}