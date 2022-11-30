"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCar = void 0;
function printCar(car) {
    console.log(`Ano ${car.year} Cor ${car.collor} Cambio-Automatico ${car.automatic} Valor de: ${car.price.toFixed(2)}, Modelo: ${car.type} Fabricante: ${car.brand}`);
}
exports.printCar = printCar;
printCar({ year: 2008, collor: "Vermelho", automatic: true, brand: "Fiat", type: "Punto", price: 50000.00 });
class Person {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
    fullName() {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    }
}
const person = new Person("Joao", "Cabral", "TinnY");
console.log(person.fullName());
class Order {
    constructor(product, quantity, date, defect) {
        this.product = product;
        this.quantity = quantity;
        this.date = date;
        this.defect = defect;
    }
    orderService() {
        const service = ` ${this.product} ${this.defect}
    dando entrada na data ${this.date} na quantidade ${this.quantity}
    aguardando or retorno do defeito
    `;
        return service;
    }
}
const tv = new Order("radio", 1, new Date(), "nao sai som");
console.log(tv.orderService());
