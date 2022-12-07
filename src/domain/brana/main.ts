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
persons[0] = {name: "Joao", age:19}
persons[0] = {name: "Joao", age:19}
persons[0] = {name: "Joao", age:19}


