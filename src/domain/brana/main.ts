import { isObject } from "util";

export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;

  }


}

const person = new Person("Joao", 10)

const persons: {name: string; age: number}[] = [] //type in line
persons[0] = {name: "Joao", age:19}
persons[1] = {name: "Joao", age:19}
persons[2] = {name: "Joao", age:19}
persons[3] = {name: "Joao", age:19}


class People {
  public name: string;
  #age: number;
  readonly email: string

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.#age = age;
    this.email = email;
  }

}

const people = new People("Joao Silva", 40, "joao@isObject.com")
console.log(people)
//people.#age = 40


