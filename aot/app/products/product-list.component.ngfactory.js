/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
"use strict";
var import0 = require("./product-list.component.css.shim.ngstyle");
var import1 = require("@angular/core");
var import2 = require("@angular/common");
var import3 = require("@angular/router");
var import4 = require("../star/star.component.ngfactory");
var import5 = require("../../../app/star/star.component");
var import6 = require("../../../app/products/product-filter.pipe");
var import7 = require("../../../app/products/product-list.component");
var import8 = require("@angular/forms");
var import9 = require("../../../app/products/product.service");
var styles_ProductListComponent = [import0.styles];
exports.RenderType_ProductListComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_ProductListComponent,
    data: {}
});
function View_ProductListComponent_1(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n            '])),
        (l()(), import1.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'h3', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            'Filtered by: ',
            ' '
        ])),
        (l()(), import1.ɵted(null, ['\n            '])),
        (l()(), import1.ɵted(null, ['\n        ']))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.listFilter;
        ck(v, 5, 0, currVal_0);
    });
}
function View_ProductListComponent_2(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'has-error'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.errorMessage;
        ck(v, 1, 0, currVal_0);
    });
}
function View_ProductListComponent_5(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'img', [], [
            [
                8,
                'src',
                4
            ],
            [
                8,
                'title',
                0
            ],
            [
                4,
                'width',
                'px'
            ],
            [
                4,
                'margin',
                'px'
            ]
        ], null, null, null, null)),
        import1.ɵppd(1)
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = v.parent.context.$implicit.imageUrl;
        var currVal_1 = import1.ɵunv(v, 0, 1, ck(v, 1, 0, import1.ɵnov(v.parent.parent.parent, 1), v.parent.context.$implicit.productName));
        var currVal_2 = co.imageWidth;
        var currVal_3 = co.imageMargin;
        ck(v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
    });
}
function View_ProductListComponent_4(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 41, 'tr', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 4, 'td', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                            '])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_ProductListComponent_5)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 6, 'td', [], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, null, 4, 'a', [], [
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
                var pd_0 = (import1.ɵnov(v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(335872, null, 0, import3.RouterLinkWithHref, [
            import3.Router,
            import3.ActivatedRoute,
            import2.LocationStrategy
        ], {
            queryParams: [
                0,
                'queryParams'
            ],
            routerLink: [
                1,
                'routerLink'
            ]
        }, null),
        import1.ɵpod([
            'filterBy',
            'showImage'
        ]),
        import1.ɵpad(2),
        (l()(), import1.ɵted(null, [
            '\n                            ',
            '\n                            '
        ])),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 2, 'td', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ])),
        import1.ɵppd(1),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 2, 'td', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ])),
        import1.ɵppd(4),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 5, 'td', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                            '])),
        (l()(), import1.ɵeld(0, null, null, 2, 'ai-star', [], null, null, null, import4.View_StarComponent_0, import4.RenderType_StarComponent)),
        import1.ɵdid(286720, null, 0, import5.StarComponent, [], { rating: [
                0,
                'rating'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n                            '])),
        (l()(), import1.ɵted(null, ['\n                       '])),
        (l()(), import1.ɵted(null, ['\n                       '])),
        (l()(), import1.ɵeld(0, null, null, 6, 'td', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                            '])),
        (l()(), import1.ɵeld(0, null, null, 3, 'a', [[
                'class',
                'btn btn-primary'
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
                var pd_0 = (import1.ɵnov(v, 37).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(335872, null, 0, import3.RouterLinkWithHref, [
            import3.Router,
            import3.ActivatedRoute,
            import2.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import1.ɵpad(3),
        (l()(), import1.ɵted(null, ['\n                                Edit\n                            '])),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵted(null, ['\n                    ']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = (co.showImage && v.context.$implicit.imageUrl);
        ck(v, 5, 0, currVal_0);
        var currVal_3 = ck(v, 11, 0, co.listFilter, co.showImage);
        var currVal_4 = ck(v, 12, 0, '/products', v.context.$implicit.id);
        ck(v, 10, 0, currVal_3, currVal_4);
        var currVal_9 = v.context.$implicit.starRating;
        ck(v, 30, 0, currVal_9);
        var currVal_12 = ck(v, 38, 0, '/products', v.context.$implicit.id, 'edit');
        ck(v, 37, 0, currVal_12);
    }, function (ck, v) {
        var currVal_1 = import1.ɵnov(v, 10).target;
        var currVal_2 = import1.ɵnov(v, 10).href;
        ck(v, 9, 0, currVal_1, currVal_2);
        var currVal_5 = v.context.$implicit.productName;
        ck(v, 13, 0, currVal_5);
        var currVal_6 = import1.ɵunv(v, 17, 0, ck(v, 18, 0, import1.ɵnov(v.parent.parent, 2), v.context.$implicit.productCode));
        ck(v, 17, 0, currVal_6);
        var currVal_7 = v.context.$implicit.releaseDate;
        ck(v, 21, 0, currVal_7);
        var currVal_8 = import1.ɵunv(v, 24, 0, ck(v, 25, 0, import1.ɵnov(v.parent.parent, 3), v.context.$implicit.price, 'USD', true, '1.2-2'));
        ck(v, 24, 0, currVal_8);
        var currVal_10 = import1.ɵnov(v, 37).target;
        var currVal_11 = import1.ɵnov(v, 37).href;
        ck(v, 36, 0, currVal_10, currVal_11);
    });
}
function View_ProductListComponent_3(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 35, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                '])),
        (l()(), import1.ɵeld(0, null, null, 25, 'thead', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                    '])),
        (l()(), import1.ɵeld(0, null, null, 22, 'tr', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 4, 'th', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                            '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'btn btn-primary'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.toggleImage() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵted(null, [
            '\n                                ',
            ' Image\n                            '
        ])),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Product'])),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Code'])),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Available'])),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Price'])),
        (l()(), import1.ɵted(null, ['\n                        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['5 Star Rating'])),
        (l()(), import1.ɵted(null, ['\n                    '])),
        (l()(), import1.ɵted(null, ['\n                '])),
        (l()(), import1.ɵted(null, ['\n                '])),
        (l()(), import1.ɵeld(0, null, null, 5, 'tbody', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                    '])),
        (l()(), import1.ɵand(8388608, null, null, 2, null, View_ProductListComponent_4)),
        import1.ɵdid(401408, null, 0, import2.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import1.ɵppd(2),
        (l()(), import1.ɵted(null, ['\n                '])),
        (l()(), import1.ɵted(null, ['\n            ']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_1 = import1.ɵunv(v, 32, 0, ck(v, 33, 0, import1.ɵnov(v.parent, 0), co.products, co.listFilter));
        ck(v, 32, 0, currVal_1);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = (co.showImage ? 'Hide' : 'Show');
        ck(v, 9, 0, currVal_0);
    });
}
function View_ProductListComponent_0(l) {
    return import1.ɵvid(0, [
        import1.ɵpid(0, import6.ProductFilterPipe, []),
        import1.ɵpid(0, import2.UpperCasePipe, []),
        import1.ɵpid(0, import2.LowerCasePipe, []),
        import1.ɵpid(0, import2.CurrencyPipe, [import1.LOCALE_ID]),
        (l()(), import1.ɵeld(0, null, null, 36, 'div', [[
                'class',
                'panel panel-primary'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'panel-heading'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '\n        ',
            '\n    '
        ])),
        (l()(), import1.ɵted(null, ['\n\n    '])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 29, 'div', [[
                'class',
                'panel-body'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 14, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n            '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'col-md-2'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Filter by:'])),
        (l()(), import1.ɵted(null, ['\n            '])),
        (l()(), import1.ɵeld(0, null, null, 8, 'div', [[
                'class',
                'col-md-4'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                '])),
        (l()(), import1.ɵeld(0, null, null, 5, 'input', [[
                'type',
                'text'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (import1.ɵnov(v, 20)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import1.ɵnov(v, 20).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import1.ɵnov(v, 20)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import1.ɵnov(v, 20)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.listFilter = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(8192, null, 0, import8.DefaultValueAccessor, [
            import1.Renderer,
            import1.ElementRef,
            [
                2,
                import8.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import1.ɵprd(512, null, import8.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import8.DefaultValueAccessor]),
        import1.ɵdid(335872, null, 0, import8.NgModel, [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import8.NG_VALUE_ACCESSOR
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import1.ɵprd(1024, null, import8.NgControl, null, [import8.NgModel]),
        import1.ɵdid(8192, null, 0, import8.NgControlStatus, [import8.NgControl], null, null),
        (l()(), import1.ɵted(null, ['\n            '])),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_ProductListComponent_1)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n\n        '])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_ProductListComponent_2)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n\n        '])),
        (l()(), import1.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'table-responsive'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n            '])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_ProductListComponent_3)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_8 = co.listFilter;
        ck(v, 22, 0, currVal_8);
        var currVal_9 = co.listFilter;
        ck(v, 29, 0, currVal_9);
        var currVal_10 = co.errorMessage;
        ck(v, 32, 0, currVal_10);
        var currVal_11 = (co.products && co.products.length);
        ck(v, 37, 0, currVal_11);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.pageTitle;
        ck(v, 7, 0, currVal_0);
        var currVal_1 = import1.ɵnov(v, 24).ngClassUntouched;
        var currVal_2 = import1.ɵnov(v, 24).ngClassTouched;
        var currVal_3 = import1.ɵnov(v, 24).ngClassPristine;
        var currVal_4 = import1.ɵnov(v, 24).ngClassDirty;
        var currVal_5 = import1.ɵnov(v, 24).ngClassValid;
        var currVal_6 = import1.ɵnov(v, 24).ngClassInvalid;
        var currVal_7 = import1.ɵnov(v, 24).ngClassPending;
        ck(v, 19, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
    });
}
exports.View_ProductListComponent_0 = View_ProductListComponent_0;
function View_ProductListComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_ProductListComponent_0, exports.RenderType_ProductListComponent)),
        import1.ɵdid(57344, null, 0, import7.ProductListComponent, [
            import9.ProductService,
            import3.ActivatedRoute
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
exports.ProductListComponentNgFactory = import1.ɵccf('ng-component', import7.ProductListComponent, View_ProductListComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvVmlzdWFsIFN0dWRpbyAyMDE3L1Byb2plY3RzL1F1aWNrL1F1aWNrL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWxpc3QuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRG9jdW1lbnRzL1Zpc3VhbCBTdHVkaW8gMjAxNy9Qcm9qZWN0cy9RdWljay9RdWljay9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRG9jdW1lbnRzL1Zpc3VhbCBTdHVkaW8gMjAxNy9Qcm9qZWN0cy9RdWljay9RdWljay9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvVmlzdWFsIFN0dWRpbyAyMDE3L1Byb2plY3RzL1F1aWNrL1F1aWNrL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnRzLlByb2R1Y3RMaXN0Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLXByaW1hcnlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XHJcbiAgICAgICAge3twYWdlVGl0bGV9fVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBGaWx0ZXIgdGhlIFByb2R1Y3RzICAgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+RmlsdGVyIGJ5OjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibGlzdEZpbHRlclwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImxpc3RGaWx0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+RmlsdGVyZWQgYnk6IHt7bGlzdEZpbHRlcn19IDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFzLWVycm9yXCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICpuZ0lmPVwicHJvZHVjdHMgJiYgcHJvZHVjdHMubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlSW1hZ2UoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c2hvd0ltYWdlID8gXCJIaWRlXCIgOiBcIlNob3dcIn19IEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByb2R1Y3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BdmFpbGFibGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+NSBTdGFyIFJhdGluZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIHByb2R1Y3RzIHwgcHJvZHVjdEZpbHRlcjpsaXN0RmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJzaG93SW1hZ2UgJiYgcHJvZHVjdC5pbWFnZVVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwicHJvZHVjdC5pbWFnZVVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJwcm9kdWN0LnByb2R1Y3ROYW1lIHwgdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cImltYWdlV2lkdGhcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm1hcmdpbi5weF09XCJpbWFnZU1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgW3JvdXRlckxpbmtdPVwiWycvcHJvZHVjdHMnLCBwcm9kdWN0LmlkXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnlQYXJhbXNdPVwie2ZpbHRlckJ5OiBsaXN0RmlsdGVyLCBzaG93SW1hZ2U6IHNob3dJbWFnZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cHJvZHVjdC5wcm9kdWN0TmFtZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBwcm9kdWN0LnByb2R1Y3RDb2RlIHwgbG93ZXJjYXNlIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHByb2R1Y3QucmVsZWFzZURhdGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgcHJvZHVjdC5wcmljZSB8IGN1cnJlbmN5OlwiVVNEXCI6dHJ1ZTpcIjEuMi0yXCIgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWktc3RhciBbcmF0aW5nXT1cInByb2R1Y3Quc3RhclJhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9haS1zdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiWycvcHJvZHVjdHMnLCBwcm9kdWN0LmlkLCAnZWRpdCddXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiIsIjxuZy1jb21wb25lbnQ+PC9uZy1jb21wb25lbnQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DYVE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFvQztNQUNoQztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXNCO0lBQ2xCO0lBQUk7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUFpQztJQUNuQzs7OztJQURFO0lBQUE7Ozs7O01BSVo7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE0QztNQUFBO01BQUE7SUFBQTtJQUFBOzs7O0lBQUE7SUFBQTs7Ozs7SUF1QnhCO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUVLOzs7O0lBREE7SUFDQTtJQUNBO0lBQ0E7SUFKTCxTQUNLLFVBQ0EsVUFDQSxVQUNBLFNBSkw7Ozs7O0lBRlI7SUFBZ0U7SUFDNUQ7SUFBSTtJQUNBO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFJcUM7SUFDcEM7SUFDTDtJQUFJO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQ0c7TUFBQTtNQUFBO0lBQUE7SUFBQTtnQkFEQTtJQUM2RDtN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
//# sourceMappingURL=product-list.component.ngfactory.js.map