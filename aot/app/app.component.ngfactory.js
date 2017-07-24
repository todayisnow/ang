/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
"use strict";
var import0 = require("./app.component.css.shim.ngstyle");
var import1 = require("@angular/core");
var import2 = require("../../app/app.component");
var import3 = require("@angular/common");
var import4 = require("@angular/router");
var import5 = require("../../app/hero.service");
var styles_AppComponent = [import0.styles];
exports.RenderType_AppComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_AppComponent,
    data: {}
});
function View_AppComponent_1(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 4, 'li', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import1.ɵted(null, ['\n    ']))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit.name;
        ck(v, 3, 0, currVal_0);
    });
}
function View_AppComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.resend() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵted(null, ['Resend'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(0, null, null, 2, 'h1', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '-- ',
            ' --'
        ])),
        import1.ɵpid(65536, import3.AsyncPipe, [import1.ChangeDetectorRef]),
        (l()(), import1.ɵted(null, ['\nmyMainHeros: '])),
        (l()(), import1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(0, null, null, 4, 'ul', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AppComponent_1)),
        import1.ɵdid(401408, null, 0, import3.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n<=========================>\n'])),
        (l()(), import1.ɵeld(0, null, null, 12, 'nav', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 5, 'a', [
            [
                'routerLink',
                '/dashboard'
            ],
            [
                'routerLinkActive',
                'actLink'
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
                var pd_0 = (import1.ɵnov(v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(335872, [[
                2,
                4
            ]
        ], 0, import4.RouterLinkWithHref, [
            import4.Router,
            import4.ActivatedRoute,
            import3.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import1.ɵdid(860160, null, 2, import4.RouterLinkActive, [
            import4.Router,
            import1.ElementRef,
            import1.Renderer,
            import1.ChangeDetectorRef
        ], { routerLinkActive: [
                0,
                'routerLinkActive'
            ]
        }, null),
        import1.ɵqud(301989888, 1, { links: 1 }),
        import1.ɵqud(301989888, 2, { linksWithHrefs: 1 }),
        (l()(), import1.ɵted(null, ['Dashboard'])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 2, 'a', [[
                'routerLink',
                '/heroes'
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
                var pd_0 = (import1.ɵnov(v, 27).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(335872, null, 0, import4.RouterLinkWithHref, [
            import4.Router,
            import4.ActivatedRoute,
            import3.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['Heroes'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(8388608, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        import1.ɵdid(73728, null, 0, import4.RouterOutlet, [
            import4.RouterOutletMap,
            import1.ViewContainerRef,
            import1.ComponentFactoryResolver,
            [
                8,
                null
            ]
        ], null, null),
        (l()(), import1.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_1 = co.obHeros;
        ck(v, 12, 0, currVal_1);
        var currVal_4 = '/dashboard';
        ck(v, 20, 0, currVal_4);
        var currVal_5 = 'actLink';
        ck(v, 21, 0, currVal_5);
        var currVal_8 = '/heroes';
        ck(v, 27, 0, currVal_8);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = import1.ɵunv(v, 4, 0, import1.ɵnov(v, 5).transform(co.title$));
        ck(v, 4, 0, currVal_0);
        var currVal_2 = import1.ɵnov(v, 20).target;
        var currVal_3 = import1.ɵnov(v, 20).href;
        ck(v, 19, 0, currVal_2, currVal_3);
        var currVal_6 = import1.ɵnov(v, 27).target;
        var currVal_7 = import1.ɵnov(v, 27).href;
        ck(v, 26, 0, currVal_6, currVal_7);
    });
}
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'my-app', [], null, null, null, View_AppComponent_0, exports.RenderType_AppComponent)),
        import1.ɵdid(57344, null, 0, import2.AppComponent, [import5.HeroService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
exports.AppComponentNgFactory = import1.ɵccf('my-app', import2.AppComponent, View_AppComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvVmlzdWFsIFN0dWRpbyAyMDE3L1Byb2plY3RzL1F1aWNrL1F1aWNrL2FwcC9hcHAuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRG9jdW1lbnRzL1Zpc3VhbCBTdHVkaW8gMjAxNy9Qcm9qZWN0cy9RdWljay9RdWljay9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRG9jdW1lbnRzL1Zpc3VhbCBTdHVkaW8gMjAxNy9Qcm9qZWN0cy9RdWljay9RdWljay9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvVmlzdWFsIFN0dWRpbyAyMDE3L1Byb2plY3RzL1F1aWNrL1F1aWNrL2FwcC9hcHAuY29tcG9uZW50LnRzLkFwcENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxidXR0b24gKGNsaWNrKT1cInJlc2VuZCgpXCI+UmVzZW5kPC9idXR0b24+XHJcbjxoMT4tLSB7eyB0aXRsZSQgfCBhc3luYyB9fSAtLTwvaDE+XHJcbm15TWFpbkhlcm9zOiA8YnIgLz5cclxuPHVsPlxyXG4gICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIG9iSGVyb3MgXCI+XHJcbiAgICAgICAgPHNwYW4+e3tpdGVtLm5hbWV9fTwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbjwvdWw+XHJcbjxiciAvPlxyXG48PT09PT09PT09PT09PT09PT09PT09PT09PT5cclxuPG5hdj5cclxuICAgIDxhIHJvdXRlckxpbms9XCIvZGFzaGJvYXJkXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdExpbmtcIj5EYXNoYm9hcmQ8L2E+XHJcbiAgICA8YSByb3V0ZXJMaW5rPVwiL2hlcm9lc1wiPkhlcm9lczwvYT5cclxuPC9uYXY+XHJcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuIiwiPG15LWFwcD48L215LWFwcD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0lJO0lBQWtDO0lBQzlCO0lBQU07TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUFvQjs7O0lBQXBCO0lBQUE7Ozs7O01BTGQ7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBUTtRQUFBO1FBQUE7TUFBQTtNQUFSO0lBQUE7SUFBMkI7SUFBZTtJQUMxQztJQUFJO01BQUE7TUFBQTtJQUFBO0lBQUE7Z0JBQUE7SUFBK0I7SUFDdEI7SUFBTTtJQUNuQjtJQUFJO0lBQ0E7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFFSztJQUNKO0lBQ0w7SUFBTTtJQUVOO0lBQUs7SUFDRDtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBc0Q7SUFBYTtNQUNuRTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQVU7SUFDaEM7SUFDTjtnQkFBQTs7OztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBK0I7Ozs7SUFWdkI7SUFBSixVQUFJLFNBQUo7SUFPRztJQUFILFVBQUcsU0FBSDtJQUEyQjtJQUEzQixVQUEyQixTQUEzQjtJQUNHO0lBQUgsVUFBRyxTQUFIOzs7SUFYQTtJQUFBO0lBVUE7SUFBQTtJQUFBLFVBQUEsbUJBQUE7SUFDQTtJQUFBO0lBQUEsVUFBQSxtQkFBQTs7Ozs7SUNaSjtnQkFBQTs7O0lBQUE7OzsifQ==
//# sourceMappingURL=app.component.ngfactory.js.map