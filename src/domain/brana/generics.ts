class Repository<T> {
  list: T[]

  constructor(){
    this.list = new Array
  }
  add(element: T){
    this.list.push(element);
  }
}

export class Person {
  constructor(readonly name: string, readonly age: number) {

  }

}

 const persons = new Repository<Person>();
 persons.add(new Person("Joao", 60))
 console.log(persons)