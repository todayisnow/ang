/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../app/products/product.module';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
import * as import4 from '@angular/router';
import * as import5 from '../../../app/products/product.service';
import * as import6 from './product-list.component.ngfactory';
import * as import7 from './product-detail.component.ngfactory';
import * as import8 from './product-edit.component.ngfactory';
import * as import9 from '@angular/http';
import * as import10 from '../../../app/products/product-list.component';
import * as import11 from '../../../app/products/product-detail.component';
import * as import12 from '../../../app/products/product-edit.component';
class ProductModuleInjector extends import0.ɵNgModuleInjector<import1.ProductModule> {
  _ɵba_0:import2.ɵba;
  _FormsModule_1:import2.FormsModule;
  _CommonModule_2:import3.CommonModule;
  _RouterModule_3:import4.RouterModule;
  _ProductModule_4:import1.ProductModule;
  __ɵi_5:import2.ɵi;
  __NgLocalization_6:import3.NgLocaleLocalization;
  _ROUTES_7:any[];
  __ProductService_8:import5.ProductService;
  constructor(parent:import0.Injector) {
    super(parent,[
      import6.ProductListComponentNgFactory,
      import7.ProductDetailComponentNgFactory,
      import8.ProductEditComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _ɵi_5():import2.ɵi {
    if ((this.__ɵi_5 == null)) { (this.__ɵi_5 = new import2.ɵi()); }
    return this.__ɵi_5;
  }
  get _NgLocalization_6():import3.NgLocaleLocalization {
    if ((this.__NgLocalization_6 == null)) { (this.__NgLocalization_6 = new import3.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_6;
  }
  get _ProductService_8():import5.ProductService {
    if ((this.__ProductService_8 == null)) { (this.__ProductService_8 = new import5.ProductService(this.parent.get(import9.Http))); }
    return this.__ProductService_8;
  }
  createInternal():import1.ProductModule {
    this._ɵba_0 = new import2.ɵba();
    this._FormsModule_1 = new import2.FormsModule();
    this._CommonModule_2 = new import3.CommonModule();
    this._RouterModule_3 = new import4.RouterModule(this.parent.get(import4.ɵa,(null as any)),this.parent.get(import4.Router,(null as any)));
    this._ProductModule_4 = new import1.ProductModule();
      this._ROUTES_7 = [[
        {
          path: 'products',
          component: import10.ProductListComponent
        }
        ,
        {
          path: 'products/:id',
          component: import11.ProductDetailComponent
        }
        ,
        {
          path: 'products/:id/edit',
          component: import12.ProductEditComponent
        }

      ]
    ];
    return this._ProductModule_4;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.ɵba)) { return this._ɵba_0; }
    if ((token === import2.FormsModule)) { return this._FormsModule_1; }
    if ((token === import3.CommonModule)) { return this._CommonModule_2; }
    if ((token === import4.RouterModule)) { return this._RouterModule_3; }
    if ((token === import1.ProductModule)) { return this._ProductModule_4; }
    if ((token === import2.ɵi)) { return this._ɵi_5; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_6; }
    if ((token === import4.ROUTES)) { return this._ROUTES_7; }
    if ((token === import5.ProductService)) { return this._ProductService_8; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ProductModuleNgFactory:import0.NgModuleFactory<import1.ProductModule> = new import0.NgModuleFactory<any>(ProductModuleInjector,import1.ProductModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvVmlzdWFsIFN0dWRpbyAyMDE3L1Byb2plY3RzL1F1aWNrL1F1aWNrL2FwcC9wcm9kdWN0cy9wcm9kdWN0Lm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0RvY3VtZW50cy9WaXN1YWwgU3R1ZGlvIDIwMTcvUHJvamVjdHMvUXVpY2svUXVpY2svYXBwL3Byb2R1Y3RzL3Byb2R1Y3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==