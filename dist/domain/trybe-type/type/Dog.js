"use strict";
class Dog {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    speak(make) {
        return make;
    }
}
const bento = new Dog('bethove', 5);
console.log(bento);
console.log(bento.speak("au au au"));
class Person {
    constructor(name, birthDate, age) {
        this.name = name,
            this.birthDate = birthDate;
        this.age = age;
    }
    speak() {
        console.log(this.name);
    }
    eat(food) {
        return `${this.name} esta comendo ${food}`;
    }
    walk() {
        console.log(this.name + "esta andando");
    }
}
const people = new Person("Joao", new Date("1981-30-12"), 50);
console.log(people);
console.log(people.speak);
console.log(people.eat("Pastel"));
console.log(people.walk);
const people1 = new Person("Joao", new Date("1981-12-30"));
console.log(people1);
people1.age = 80;
console.log(people1);
