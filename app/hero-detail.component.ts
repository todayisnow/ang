import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


import { Hero } from './shared/classes/hero';
@Component({
    selector: 'hero-detail',
    //moduleId: module.id,
    templateUrl:'./hero-detail.component.html'
})
export class HeroDetailComponent implements OnChanges {

  

    @Input() hero: Hero;
    dateType: number = 0;
    asIf: number = new Date(2020, 1, 1).getTime();

    @Output() sendSubTitle: EventEmitter<string> = new EventEmitter<string>();
   

    onSendSubTitle(): void {
        this.sendSubTitle.emit("My "+this.hero.name)
    }

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
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
}
