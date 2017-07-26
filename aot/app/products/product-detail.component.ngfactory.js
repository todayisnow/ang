/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '../star/star.component.ngfactory';
import * as import2 from '../../../app/star/star.component';
import * as import3 from '@angular/common';
import * as import4 from '@angular/router';
import * as import5 from '../../../app/products/product-detail.component';
import * as import6 from '../../../app/products/product.service';
var styles_ProductDetailComponent = [];
export var RenderType_ProductDetailComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_ProductDetailComponent,
    data: {}
});
function View_ProductDetailComponent_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'img', [[
                'class',
                'center-block img-responsive'
            ]
        ], [
            [
                4,
                'width',
                'px'
            ],
            [
                4,
                'margin',
                'px'
            ],
            [
                8,
                'src',
                4
            ],
            [
                8,
                'title',
                0
            ]
        ], null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            ']))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = 200;
        var currVal_1 = 2;
        var currVal_2 = co.product.imageUrl;
        var currVal_3 = co.product.productName;
        ck(v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);
    });
}
function View_ProductDetailComponent_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'has-error'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.errorMessage;
        ck(v, 1, 0, currVal_0);
    });
}
function View_ProductDetailComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 111, 'div', [[
                'class',
                'panel panel-primary'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [
            [
                'class',
                'panel-heading'
            ],
            [
                'style',
                'font-size:large'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n        ',
            '\n    '
        ])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 90, 'div', [[
                'class',
                'panel-body'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 84, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 78, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-3'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Name:'])),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-3'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Code:'])),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-3'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Description:'])),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-3'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Availability:'])),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 8, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-3'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Price:'])),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        import0.ɵppd(3),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-3'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['5 Star Rating:'])),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                        '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'ai-star', [], null, null, null, import1.View_StarComponent_0, import1.RenderType_StarComponent)),
        import0.ɵdid(286720, null, 0, import2.StarComponent, [], { rating: [
                0,
                'rating'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n                        '])),
        (l()(), import0.ɵted(null, ['\n                       \n                    '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-3'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Category:'])),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-3'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Tags:'])),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_ProductDetailComponent_2)),
        import0.ɵdid(8192, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_ProductDetailComponent_3)),
        import0.ɵdid(8192, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 13, 'div', [[
                'class',
                'panel-footer'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'a', [[
                'class',
                'btn btn-default'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import0.ɵnov(v, 100).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(335872, null, 0, import4.RouterLinkWithHref, [
            import4.Router,
            import4.ActivatedRoute,
            import3.LocationStrategy
        ], {
            routerLink: [
                0,
                'routerLink'
            ],
            preserveQueryParams: [
                1,
                'preserveQueryParams'
            ]
        }, null),
        import0.ɵpad(1),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'i', [[
                'class',
                'glyphicon glyphicon-chevron-left'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [' Back\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'a', [
            [
                'class',
                'btn btn-primary'
            ],
            [
                'style',
                'width:80px;margin-left:10px'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import0.ɵnov(v, 107).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(335872, null, 0, import4.RouterLinkWithHref, [
            import4.Router,
            import4.ActivatedRoute,
            import3.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import0.ɵpad(3),
        (l()(), import0.ɵted(null, ['\n            Edit\n        '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_6 = co.product.starRating;
        ck(v, 65, 0, currVal_6);
        var currVal_9 = co.product.imageUrl;
        ck(v, 90, 0, currVal_9);
        var currVal_10 = co.errorMessage;
        ck(v, 94, 0, currVal_10);
        var currVal_13 = ck(v, 101, 0, '/products');
        var currVal_14 = true;
        ck(v, 100, 0, currVal_13, currVal_14);
        var currVal_17 = ck(v, 108, 0, '/products', co.product.id, 'edit');
        ck(v, 107, 0, currVal_17);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = ((co.pageTitle + ': ') + co.product.productName);
        ck(v, 3, 0, currVal_0);
        var currVal_1 = co.product.productName;
        ck(v, 17, 0, currVal_1);
        var currVal_2 = co.product.productCode;
        ck(v, 26, 0, currVal_2);
        var currVal_3 = co.product.description;
        ck(v, 35, 0, currVal_3);
        var currVal_4 = co.product.releaseDate;
        ck(v, 44, 0, currVal_4);
        var currVal_5 = import0.ɵunv(v, 53, 0, ck(v, 54, 0, import0.ɵnov(v.parent, 0), co.product.price, 'USD', true));
        ck(v, 53, 0, currVal_5);
        var currVal_7 = co.product.category;
        ck(v, 76, 0, currVal_7);
        var currVal_8 = co.product.tags;
        ck(v, 85, 0, currVal_8);
        var currVal_11 = import0.ɵnov(v, 100).target;
        var currVal_12 = import0.ɵnov(v, 100).href;
        ck(v, 99, 0, currVal_11, currVal_12);
        var currVal_15 = import0.ɵnov(v, 107).target;
        var currVal_16 = import0.ɵnov(v, 107).href;
        ck(v, 106, 0, currVal_15, currVal_16);
    });
}
export function View_ProductDetailComponent_0(l) {
    return import0.ɵvid(0, [
        import0.ɵpid(0, import3.CurrencyPipe, [import0.LOCALE_ID]),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_ProductDetailComponent_1)),
        import0.ɵdid(8192, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.product;
        ck(v, 2, 0, currVal_0);
    }, null);
}
function View_ProductDetailComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_ProductDetailComponent_0, RenderType_ProductDetailComponent)),
        import0.ɵdid(57344, null, 0, import5.ProductDetailComponent, [
            import6.ProductService,
            import4.ActivatedRoute
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var ProductDetailComponentNgFactory = import0.ɵccf('ng-component', import5.ProductDetailComponent, View_ProductDetailComponent_Host_0, {}, {}, []);
//# sourceMappingURL=product-detail.component.ngfactory.js.map