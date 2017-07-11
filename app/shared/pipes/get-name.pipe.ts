
import { Pipe, PipeTransform } from '@angular/core';
import { MyObject } from "../../my-heroes.component";

@Pipe({
    name: 'GetNamePure'
})
export class GetNamePurePipe implements PipeTransform {
    transform(value: MyObject): string {
        return value.name;
    }
}
@Pipe({
    name: 'GetNameImpure',
    pure:false
})
export class GetNameImpurePipe implements GetNamePurePipe {
        transform(value: MyObject): string {
            return value.name;
        }

   
}

