"use strict";
// ./length.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
console.log(convert(10, 'km', 'm'));
console.log(units.indexOf('km'));
console.log(units.indexOf('m'));
