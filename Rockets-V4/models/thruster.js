"use strict";
var Thruster = /** @class */ (function () {
    function Thruster(maxPower) {
        this.maxPower = maxPower;
    }
    Object.defineProperty(Thruster.prototype, "getMaxPower", {
        get: function () {
            return this.maxPower;
        },
        enumerable: true,
        configurable: true
    });
    return Thruster;
}());
