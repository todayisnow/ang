
import { Component } from '@angular/core';

@Component({
    selector: 'my-product',
    moduleId: "./app/products/",
    styleUrls: ['./products.component.css'],
    templateUrl: './products.component.html'
})
export class ProductsComponent {
   title:string = "My Products"
}
