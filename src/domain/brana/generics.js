"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Repository = /** @class */ (function () {
    function Repository() {
        this.list = new Array;
    }
    Repository.prototype.add = function (element) {
        this.list.push(element);
    };
    return Repository;
}());
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports.Person = Person;
var persons = new Repository();
persons.add(new Person("Joao", 60));
console.log(persons);
