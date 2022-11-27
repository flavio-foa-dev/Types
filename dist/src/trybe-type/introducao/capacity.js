"use strict";
// ./capacity.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
console.log(convert(10, 'l', 'ml'));
console.log(units.indexOf('l'));
console.log(units.indexOf('ml'));
