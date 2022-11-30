interface Dog {
  name: string,
  year: number,
  speak(make:string):string;

}

class Dog {
  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }

  speak(make:string) {
    return make
  }
}

const bento = new Dog('bethove', 5)
console.log(bento)

console.log(bento.speak("au au au"))



interface Person {
  name: string,
  birthDate: Date,
  age?: number
}

class Person {

  constructor(name: string, birthDate: Date, age?: number){
    this.name = name,
    this.birthDate = birthDate
    this.age = age
  }

  speak():void {
    console.log(this.name)
  }

  eat(food: string): string {
    return `${this.name} esta comendo ${food}`
  }

  walk(): void {
    console.log(this.name + "esta andando")
  }

}

const people = new Person("Joao", new Date("1981-30-12"), 50)
console.log(people)

console.log(people.speak)

console.log(people.eat("Pastel"))

console.log(people.walk)


const people1 = new Person("Joao", new Date("1981-12-30"))
console.log(people1)

people1.age = 80

console.log(people1)

