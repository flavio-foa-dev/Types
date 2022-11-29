type Car = {
  year: number;
  collor: string;
  automatic: boolean;
  brand: string;
  type: string;
  price: number;
}

export function printCar(car: Car): void {
  console.log(`Ano ${car.year} Cor ${car.collor} Cambio-Automatico ${car.automatic} Valor de: ${car.price.toFixed(2)}, Modelo: ${car.type} Fabricante: ${car.brand}`)
}


printCar({year:2008, collor:"Vermelho", automatic:true, brand: "Fiat", type:"Punto", price: 50000.00})


interface Person{
  firstName:string;
  middleName: string;
  lastName:string;

  fullName():string;
}

class Person {

  constructor(firstName: string, middleName: string, lastName: string) {
    this.firstName = firstName
    this.middleName = middleName
    this.lastName = lastName
  }

  fullName() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName
  }
}

const person = new Person("Joao", "Cabral", "TinnY")
console.log(person.fullName())



interface Order {
  product :string;
  quantity :number;
  date: Date;
  defect : string;

  orderService(): string;

}

class Order {
  constructor(
    product: string,
    quantity: number,
    date: Date,
    defect: string) {

      this.product = product;
      this.quantity = quantity;
      this.date = date;
      this.defect = defect;
  }

  orderService() {
    const service = ` ${this.product} ${this.defect}
    dando entrada na data ${this.date} na quantidade ${this.quantity}
    aguardando or retorno do defeito
    `
    return service
  }
}

const  tv = new Order("radio", 1, new Date(), "nao sai som" );
console.log(tv.orderService())