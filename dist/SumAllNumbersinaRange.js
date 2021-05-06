"use strict";
exports.__esModule = true;
function default_1(arr) {
    var max = Math.max.apply(Math, arr);
    var min = Math.min.apply(Math, arr);
    var arrAddends = [];
    for (var index = min; index <= max; index++) {
        arrAddends.push(index);
    }
    return arrAddends.reduce(function (previous, current) {
        return previous + current;
    });
}
exports["default"] = default_1;
