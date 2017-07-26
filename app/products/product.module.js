var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; //ngmodel 2 way bining
import { CommonModule } from '@angular/common'; //ngif ngfor
import { StarComponent } from '../star/star.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    NgModule({
        imports: [
            FormsModule,
            CommonModule,
            RouterModule.forChild([
                { path: 'products', component: ProductListComponent },
                { path: 'products/:id', component: ProductDetailComponent },
                { path: 'products/:id/edit', component: ProductEditComponent }
            ])
        ],
        declarations: [
            ProductListComponent, StarComponent,
            ProductDetailComponent,
            ProductEditComponent,
            ProductFilterPipe
        ],
        providers: [
            ProductService
        ]
    })
], ProductModule);
export { ProductModule };
//# sourceMappingURL=product.module.js.map