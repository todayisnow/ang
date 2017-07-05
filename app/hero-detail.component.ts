import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
		<br>
		<label>BirthDate: </label>
		{{hero.birthdate | date:'MM/dd/yyyy'}} -- {{hero.birthdate | date:'fullDate'}}
		<br>

		<label>Salary: </label>
		{{hero.salary | currency:'eur':true:'1.2-2'}}
		<br>
		<label>ShortName: </label>
		{{hero.name | slice:0:1}}
      </div>
    </div>
  `
})
export class HeroDetailComponent {
	@Input() hero: Hero;
}
