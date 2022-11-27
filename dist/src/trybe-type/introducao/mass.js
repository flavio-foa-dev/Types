"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
console.log(convert(10, 'kg', 'g'));
console.log(units.indexOf('kg'));
console.log(units.indexOf('g'));
