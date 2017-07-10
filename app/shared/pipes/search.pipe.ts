
import { Pipe, PipeTransform } from '@angular/core';
import { Hero} from '../classes/hero'

@Pipe({
    name: 'search'
})
export class searchPipe implements PipeTransform {
    transform(value: Hero[], s: string = ''): any {
        if (value != undefined && value!=null)
        return value.filter(x => x.name.toLowerCase().startsWith(s.toLowerCase()));
    }
}
