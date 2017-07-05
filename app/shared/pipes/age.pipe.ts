import { Pipe, PipeTransform } from '@angular/core' //decorator and interface


@Pipe({
    name: 'age'
    //pure

})

export class AgePipe implements PipeTransform
{
    transform(value: Date,asIf:number) {
        if (!value) return value;
        if (!asIf)
            asIf = Date.now();
        var timeDiff = Math.abs(asIf - value.getTime());
        //Used Math.floor instead of Math.ceil
        //so 26 years and 140 days would be considered as 26, not 27.
        return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        
    }
}