"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.units = void 0;
// ./length.ts
const readline_sync_1 = __importDefault(require("readline-sync")); // importamos o pacote readline-sync
exports.units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = exports.units.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = exports.units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
console.log(convert(10, 'km', 'm'));
console.log(exports.units.indexOf('km'));
console.log(exports.units.indexOf('m'));
function exec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(exports.units, "Escolha um número para a unidade base:");
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(exports.units, "Escolha um número para a conversão:");
    const fromUnitChoice = exports.units[fromUnitChoiceIndex];
    const toUnitChoice = exports.units[toUnitChoiceIndex];
    const result = convert(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec();
