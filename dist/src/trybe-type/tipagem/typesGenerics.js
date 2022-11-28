"use strict";
function stringToJson(str) {
    const result = JSON.parse(str);
    return result;
}
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');
const address = stringToJson('{"street":"Rua Tamarindo","number":1}');
console.log(user);
console.log(address);
// const str :unknown = "testodesconhecido"
// str.split('').forEach
// (str as string).split('') // corrigindo erro de type desconhecido
// const num:  string = "3"
// num as number // dispara um erro de type
// (num as unknown) as number
function stringTJson(str) {
    const result = JSON.parse(str);
    return result;
}
console.log(stringTJson('{"type":"string"}'));
function toJson(str, id) {
    const result = JSON.parse(str);
    result.id = id;
    console.log(result);
    return result;
}
toJson('{"str":"dois", "id": 100}', 1000);
function identity(value, message) {
    console.log(value);
    return value;
}
identity(1000, 1000);
identity("oioioioi", "eieieieie");
function getArray(items) {
    const result = new Array().concat(items);
    console.log(result);
    return result;
}
const numberArray = getArray([4, 6, 9, 0]);
numberArray.push(100);
//numberArray.push("1000") aqui gera um erro
const stringArray = getArray(["dois", "colegio", "carro"]);
stringArray.push("casa");
// stringArray.push(300) aqui gera outro erro pois definimos o type
