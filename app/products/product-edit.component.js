var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
var ProductEditComponent = (function () {
    function ProductEditComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.pageTitle = 'Product Edit';
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
    };
    ProductEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (product) { return _this.onProductRetrieved(product); }, function (error) { return _this.errorMessage = error; });
    };
    ProductEditComponent.prototype.onProductRetrieved = function (product) {
        this.product = product;
        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        }
        else {
            this.pageTitle = "Edit Product: " + this.product.productName;
        }
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the product: " + this.product.productName + "?")) {
                this.productService.deleteProduct(this.product.id)
                    .subscribe(function () { return _this.onSaveComplete(_this.product.productName + " was deleted"); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        if (true === true) {
            this.productService.saveProduct(this.product)
                .subscribe(function () { return _this.onSaveComplete(_this.product.productName + " was saved"); }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    };
    ProductEditComponent.prototype.onSaveComplete = function (message) {
        // Navigate back to the product list
        this.router.navigate(['/products']);
    };
    return ProductEditComponent;
}());
ProductEditComponent = __decorate([
    Component({
        templateUrl: './product-edit.component.html',
        styleUrls: ['./product-edit.component.css']
    }),
    __metadata("design:paramtypes", [ProductService,
        ActivatedRoute,
        Router])
], ProductEditComponent);
export { ProductEditComponent };
//# sourceMappingURL=product-edit.component.js.map