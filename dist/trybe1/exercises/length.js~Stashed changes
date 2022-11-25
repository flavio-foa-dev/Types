"use strict";
// ./length.ts
// lembrete: mudar o array units e a base para o cálculo em cada arquivo!
const readline = require('readline-sync'); // importamos o pacote readline-sync
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
console.log(convert(10, 'km', 'm'));
console.log(units.indexOf('km'));
console.log(units.indexOf('m'));
function exec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a unidade base:");
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a conversão:");
    const fromUnitChoice = units[fromUnitChoiceIndex];
    const toUnitChoice = units[toUnitChoiceIndex];
    const result = convert(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec();
