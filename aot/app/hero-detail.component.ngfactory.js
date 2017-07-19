/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '@angular/forms';
import * as import2 from '@angular/common';
import * as import3 from '../../app/shared/pipes/age.pipe';
import * as import4 from '../../app/hero-detail.component';
var styles_HeroDetailComponent = [];
export var RenderType_HeroDetailComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_HeroDetailComponent,
    data: {}
});
function View_HeroDetailComponent_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 2, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n            ',
            '\n        '
        ])),
        import0.ɵppd(2)
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = import0.ɵunv(v, 1, 0, ck(v, 2, 0, import0.ɵnov(v.parent.parent, 1), co.hero.birthdate, 'fullDate'));
        ck(v, 1, 0, currVal_0);
    });
}
function View_HeroDetailComponent_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 2, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n            ',
            '\n        '
        ])),
        import0.ɵppd(2)
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = import0.ɵunv(v, 1, 0, ck(v, 2, 0, import0.ɵnov(v.parent.parent, 1), co.hero.birthdate, 'MM/dd/yyyy'));
        ck(v, 1, 0, currVal_0);
    });
}
function View_HeroDetailComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 81, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onSendSubTitle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Set Title'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ' details!'
        ])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['id: '])),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n    \n    '])),
        (l()(), import0.ɵeld(0, null, null, 67, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['name: '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [[
                'placeholder',
                'name'
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
                var pd_0 = (import0.ɵnov(v, 19)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 19).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 19)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 19)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.hero.name = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import1.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import1.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(512, null, import1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import1.DefaultValueAccessor]),
        import0.ɵdid(335872, null, 0, import1.NgModel, [
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
                import1.NG_VALUE_ACCESSOR
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import0.ɵprd(1024, null, import1.NgControl, null, [import1.NgModel]),
        import0.ɵdid(8192, null, 0, import1.NgControlStatus, [import1.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Age: '])),
        (l()(), import0.ɵted(null, [
            '\n        ',
            ' '
        ])),
        import0.ɵppd(2),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'id',
                'whatAge'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.whatAge() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Get Current Age'])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'input', [
            [
                'name',
                'dateType'
            ],
            [
                'type',
                'radio'
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
            ],
            [
                null,
                'change'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 37)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 37).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 37)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 37)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('change' === en)) {
                var pd_4 = (import0.ɵnov(v, 38).onChange() !== false);
                ad = (pd_4 && ad);
            }
            if (('blur' === en)) {
                var pd_5 = (import0.ɵnov(v, 38).onTouched() !== false);
                ad = (pd_5 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_6 = ((co.dateType = $event) !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import1.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import1.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵdid(106496, null, 0, import1.RadioControlValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            import1.ɵi,
            import0.Injector
        ], {
            name: [
                0,
                'name'
            ],
            value: [
                1,
                'value'
            ]
        }, null),
        import0.ɵprd(512, null, import1.NG_VALUE_ACCESSOR, function (p0_0, p1_0) {
            return [
                p0_0,
                p1_0
            ];
        }, [
            import1.DefaultValueAccessor,
            import1.RadioControlValueAccessor
        ]),
        import0.ɵdid(335872, null, 0, import1.NgModel, [
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
                import1.NG_VALUE_ACCESSOR
            ]
        ], {
            name: [
                0,
                'name'
            ],
            model: [
                1,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import0.ɵprd(1024, null, import1.NgControl, null, [import1.NgModel]),
        import0.ɵdid(8192, null, 0, import1.NgControlStatus, [import1.NgControl], null, null),
        (l()(), import0.ɵted(null, ['FullDate\n        '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'input', [
            [
                'name',
                'dateType'
            ],
            [
                'type',
                'radio'
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
            ],
            [
                null,
                'change'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 45)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 45).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 45)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 45)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('change' === en)) {
                var pd_4 = (import0.ɵnov(v, 46).onChange() !== false);
                ad = (pd_4 && ad);
            }
            if (('blur' === en)) {
                var pd_5 = (import0.ɵnov(v, 46).onTouched() !== false);
                ad = (pd_5 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_6 = ((co.dateType = $event) !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import1.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import1.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵdid(106496, null, 0, import1.RadioControlValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            import1.ɵi,
            import0.Injector
        ], {
            name: [
                0,
                'name'
            ],
            value: [
                1,
                'value'
            ]
        }, null),
        import0.ɵprd(512, null, import1.NG_VALUE_ACCESSOR, function (p0_0, p1_0) {
            return [
                p0_0,
                p1_0
            ];
        }, [
            import1.DefaultValueAccessor,
            import1.RadioControlValueAccessor
        ]),
        import0.ɵdid(335872, null, 0, import1.NgModel, [
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
                import1.NG_VALUE_ACCESSOR
            ]
        ], {
            name: [
                0,
                'name'
            ],
            model: [
                1,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import0.ɵprd(1024, null, import1.NgControl, null, [import1.NgModel]),
        import0.ɵdid(8192, null, 0, import1.NgControlStatus, [import1.NgControl], null, null),
        (l()(), import0.ɵted(null, ['MM/dd/yyyy\n        '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['BirthDate: '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_HeroDetailComponent_2)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_HeroDetailComponent_3)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n        \n        \n        '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'input', [
            [
                'name',
                'currencyType'
            ],
            [
                'type',
                'radio'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = ((co.currenyType = 'eur') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['EUR\n        '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'input', [
            [
                'name',
                'currencyType'
            ],
            [
                'type',
                'radio'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = ((co.currenyType = 'egp') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['EGP\n        '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Salary: '])),
        (l()(), import0.ɵted(null, [
            '\n        ',
            '\n        '
        ])),
        import0.ɵppd(4),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['ShortName: '])),
        (l()(), import0.ɵted(null, [
            '\n        ',
            '\n        \n\n       \n    '
        ])),
        import0.ɵpid(0, import2.SlicePipe, []),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_9 = co.hero.name;
        ck(v, 21, 0, currVal_9);
        var currVal_18 = 'dateType';
        var currVal_19 = 0;
        ck(v, 38, 0, currVal_18, currVal_19);
        var currVal_20 = 'dateType';
        var currVal_21 = co.dateType;
        ck(v, 40, 0, currVal_20, currVal_21);
        var currVal_29 = 'dateType';
        var currVal_30 = 1;
        ck(v, 46, 0, currVal_29, currVal_30);
        var currVal_31 = 'dateType';
        var currVal_32 = co.dateType;
        ck(v, 48, 0, currVal_31, currVal_32);
        var currVal_33 = (co.dateType == 0);
        ck(v, 58, 0, currVal_33);
        var currVal_34 = (co.dateType == 1);
        ck(v, 61, 0, currVal_34);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.hero.name;
        ck(v, 6, 0, currVal_0);
        var currVal_1 = co.hero.id;
        ck(v, 11, 0, currVal_1);
        var currVal_2 = import0.ɵnov(v, 23).ngClassUntouched;
        var currVal_3 = import0.ɵnov(v, 23).ngClassTouched;
        var currVal_4 = import0.ɵnov(v, 23).ngClassPristine;
        var currVal_5 = import0.ɵnov(v, 23).ngClassDirty;
        var currVal_6 = import0.ɵnov(v, 23).ngClassValid;
        var currVal_7 = import0.ɵnov(v, 23).ngClassInvalid;
        var currVal_8 = import0.ɵnov(v, 23).ngClassPending;
        ck(v, 18, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
        var currVal_10 = import0.ɵunv(v, 29, 0, ck(v, 30, 0, import0.ɵnov(v.parent, 0), co.hero.birthdate, co.asIf));
        ck(v, 29, 0, currVal_10);
        var currVal_11 = import0.ɵnov(v, 42).ngClassUntouched;
        var currVal_12 = import0.ɵnov(v, 42).ngClassTouched;
        var currVal_13 = import0.ɵnov(v, 42).ngClassPristine;
        var currVal_14 = import0.ɵnov(v, 42).ngClassDirty;
        var currVal_15 = import0.ɵnov(v, 42).ngClassValid;
        var currVal_16 = import0.ɵnov(v, 42).ngClassInvalid;
        var currVal_17 = import0.ɵnov(v, 42).ngClassPending;
        ck(v, 36, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17);
        var currVal_22 = import0.ɵnov(v, 50).ngClassUntouched;
        var currVal_23 = import0.ɵnov(v, 50).ngClassTouched;
        var currVal_24 = import0.ɵnov(v, 50).ngClassPristine;
        var currVal_25 = import0.ɵnov(v, 50).ngClassDirty;
        var currVal_26 = import0.ɵnov(v, 50).ngClassValid;
        var currVal_27 = import0.ɵnov(v, 50).ngClassInvalid;
        var currVal_28 = import0.ɵnov(v, 50).ngClassPending;
        ck(v, 44, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28);
        var currVal_35 = import0.ɵunv(v, 73, 0, ck(v, 74, 0, import0.ɵnov(v.parent, 2), co.hero.salary, co.currenyType, true, '1.2-2'));
        ck(v, 73, 0, currVal_35);
        var currVal_36 = import0.ɵunv(v, 79, 0, import0.ɵnov(v, 80).transform(co.hero.name, 0, 1));
        ck(v, 79, 0, currVal_36);
    });
}
export function View_HeroDetailComponent_0(l) {
    return import0.ɵvid(0, [
        import0.ɵpid(0, import3.AgePipe, []),
        import0.ɵpid(0, import2.DatePipe, [import0.LOCALE_ID]),
        import0.ɵpid(0, import2.CurrencyPipe, [import0.LOCALE_ID]),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_HeroDetailComponent_1)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.hero;
        ck(v, 4, 0, currVal_0);
    }, null);
}
function View_HeroDetailComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'hero-detail', [], null, null, null, View_HeroDetailComponent_0, RenderType_HeroDetailComponent)),
        import0.ɵdid(286720, null, 0, import4.HeroDetailComponent, [], null, null)
    ], null, null);
}
export var HeroDetailComponentNgFactory = import0.ɵccf('hero-detail', import4.HeroDetailComponent, View_HeroDetailComponent_Host_0, { hero: 'hero' }, { sendSubTitle: 'sendSubTitle' }, []);
//# sourceMappingURL=hero-detail.component.ngfactory.js.map