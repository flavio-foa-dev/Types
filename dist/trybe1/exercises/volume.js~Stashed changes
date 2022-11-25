"use strict";
// ./volume.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(1000, exponent);
}
exports.convert = convert;
console.log(convert(10, 'km³', 'm³'));
console.log(units.indexOf('km³'));
console.log(units.indexOf('m³'));
