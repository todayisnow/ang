import { Component, Input } from '@angular/core';
import { Hero } from './shared/classes/hero';
@Component({
    selector: 'hero-detail',
    moduleId: module.id,
    templateUrl:'./hero-detail.component.html'
})
export class HeroDetailComponent {

    @Input() hero: Hero;
    dateType: number = 0;
    asIf: number = new Date(2020, 1, 1).getTime();
    whatAge(): void {
        if (!this.asIf) {
            this.asIf = new Date(2020, 1, 1).getTime();
            document.getElementById("whatAge").innerHTML = "Get Current Age";
        }
        else {
            this.asIf = null;
            document.getElementById("whatAge").innerHTML = "Get Future Age";

        }
        
    }
}
