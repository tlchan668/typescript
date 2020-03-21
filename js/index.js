"use strict";
var a = 1000;
function x() {
    return 1;
}
var y = function () {
    return 0;
};
var Z = function () {
    return -1;
};
function X() {
    var ctrl = document.getElementById("out");
    ctrl.innerText = "500";
}
var a1 = 5;
a1 = "abc"; //this would be a problem on running
var b1 = "ABC";
b1 = true; //similar error but will let you compile
var c1 = 4;
//it will let you run it but may not run correctly
function x1(t) {
    return t + 4;
}
function x2(tt) {
}
var Customer = /** @class */ (function () {
    //constructor has set name constructor
    function Customer(name) {
        if (name === void 0) { name = 'NEW Cust'; }
        this.id = 0;
        this.active = true;
        this.id = 0;
        this.name = name;
        this.active = true;
        this.sales = 1;
    }
    //methods in js and ts classes are like c#
    Customer.prototype.print = function () {
        console.log('${this.name}');
    };
    return Customer;
}());
