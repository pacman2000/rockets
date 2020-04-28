"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(id) {
        this.thrusters = new Array();
        this.id = id;
        this.currentPower = 0;
        this.speed = 0;
    }
    Object.defineProperty(Rocket.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "getCurrentPower", {
        get: function () {
            return this.currentPower;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "getSpeed", {
        get: function () {
            return this.speed;
        },
        enumerable: true,
        configurable: true
    });
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    Rocket.prototype.accelerate = function (sum) {
        if (this.currentPower >= sum) {
            this.currentPower = sum;
        }
        else {
            this.currentPower += 10;
        }
        return this.currentPower;
    };
    Rocket.prototype.brake = function () {
        if (this.currentPower <= 0) {
            this.currentPower = 0;
        }
        else {
            this.currentPower -= 10;
        }
        return this.currentPower;
    };
    return Rocket;
}());
