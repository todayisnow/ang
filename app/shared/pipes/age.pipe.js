"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core"); //decorator and interface
var AgePipe = (function () {
    function AgePipe() {
    }
    AgePipe.prototype.transform = function (value, asIf) {
        if (!value)
            return value;
        if (!asIf)
            asIf = Date.now();
        var timeDiff = Math.abs(asIf - value.getTime());
        //Used Math.floor instead of Math.ceil
        //so 26 years and 140 days would be considered as 26, not 27.
        return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    };
    return AgePipe;
}());
AgePipe = __decorate([
    core_1.Pipe({
        name: 'age'
    })
], AgePipe);
exports.AgePipe = AgePipe;
//# sourceMappingURL=age.pipe.js.map