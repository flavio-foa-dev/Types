"use strict";
let fullName = ['Jane', 'doe'];
let person = ['Jane doe', 54];
let car = ["Ford", "Ranger", 20023, true];
let pais = ["Brasil", "Brasilia", 2023, true];
console.log(fullName);
console.log(person);
console.log(car);
console.log(pais);
function printCoord(pt) {
    console.log(pt.x, pt.y);
}
printCoord({ x: 100, y: 1000 });
function printAve(ave) {
    console.log(`  esta ${ave.name}
  da familia ${ave.family}
  com cobertura ${ave.roof}
  temos aqui a quantidade de ${ave.quantity} `);
}
printAve({ name: "galinha", family: "ave", roof: true, quantity: 2000 });
function printSoma(soma) {
    console.log(soma.a + soma.b);
}
printSoma({ a: 10, b: 10 });
function printAdress(adress) {
    console.log(`  Rua ${adress.road}
  numero ${adress.number}
  bairro ${adress.district}
  cidade ${adress.city}
  estado ${adress.state}
  pais ${adress.country} `);
}
printAdress({ road: "Ruby", number: 10, district: "Java", city: "JavaScript", state: "Python", country: "TypeScript" });
console.log("_____________________________________________________________________");
function printStadoFisico(stado) {
}
printStadoFisico(1000);
printStadoFisico("1000000000");
function printtext(text) {
    console.log(text);
}
printtext("meu texto");
printtext(2023);
