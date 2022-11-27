let fullName:[string, string] = ['Jane', 'doe'];
let person : [ string, number] = ['Jane doe', 54];
let  car :[string, string, number, boolean] = ["Ford", "Ranger", 20023, true];
let pais : [string, string, number,  boolean] = ["Brasil", "Brasilia", 2023, true]

console.log(fullName)
console.log(person)


console.log(car)
console.log(pais)

// os type aliases so podem ser usados em arquivo TypeScript

type Point = {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log(pt.x, pt.y)

}
printCoord({x: 100, y: 1000});


type Ave = {
  name: string
  family: string
  roof: boolean
  quantity: number
}

function printAve(ave: Ave) {
  console.log(`  esta ${ave.name}
  da familia ${ave.family}
  com cobertura ${ave.roof}
  temos aqui a quantidade de ${ave.quantity} `)
}
printAve({name:"galinha", family:"ave", roof: true, quantity: 2000})

type Soma = {
  a: number;
  b: number;
}

function printSoma(soma:Soma) {
  console.log(soma.a + soma.b)
}

printSoma({a:10, b:10});

type Adress = {
  road: string;
  number: number;
  district: string;
  city: string;
  state: string;
  country: string;
}

function printAdress(adress: Adress){
  console.log(`  Rua ${adress.road}
  numero ${adress.number}
  bairro ${adress.district}
  cidade ${adress.city}
  estado ${adress.state}
  pais ${adress.country} `);
}

printAdress({road: "Ruby", number:10, district: "Java", city: "JavaScript", state:"Python", country:"TypeScript"})

console.log("_____________________________________________________________________")


type statesOfMatter = "liquid" | "solid" | "gaseus"
function printStadoFisico(stado: string | number) {

}
printStadoFisico(1000)
printStadoFisico("1000000000")

type IdentifyingDocument = string | number;
function printtext(text: string| number) {
  console.log(text)
}

printtext("meu texto")
printtext(2023)


type SO = "linux" | "mac os" | "windows";
type Vowels = "a" | "e" | "i" | "o" | "u";