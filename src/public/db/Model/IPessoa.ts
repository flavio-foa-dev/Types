export interface IPessoa<T> {
  id?: T;
  name: string;
  age: number;
}
class PessoaT implements IPessoa<number> {
  id?: number = 0;
  name: string = "Pessoa";
  age: number = 0;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

}





































