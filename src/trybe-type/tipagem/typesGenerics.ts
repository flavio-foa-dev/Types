type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string
  password: string
}

function stringToJson(str: string): unknown {
  const result = JSON.parse(str)
  return result;
}

const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User

const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')

console.log(user)
console.log(address)

// const str :unknown = "testodesconhecido"
// str.split('').forEach
// (str as string).split('') // corrigindo erro de type desconhecido

// const num:  string = "3"
// num as number // dispara um erro de type
// (num as unknown) as number

function stringTJson<T>(str: string): T {
  const result = JSON.parse(str);
  return result
}

console.log(stringTJson('{"type":"string"}'))

function toJson<F,I>(str:string, id:I): F & Object {
  const result = JSON.parse(str)
  result.id = id
  console.log(result)
  return result
}
toJson('{"str":"dois", "id": 100}', 1000)

function identity<T, U>(value: T, message: U): T {
 console.log(value)
 return value
}

identity(1000, 1000)
identity("oioioioi", "eieieieie")



function getArray<F>(items:F[]):F[]{
  const result = new Array<F>().concat(items)
  console.log(result)
  return result
}

const numberArray = getArray<number>([4, 6, 9, 0])
numberArray.push(100)
//numberArray.push("1000") aqui gera um erro

const stringArray = getArray<string>(["dois", "colegio", "carro"])
stringArray.push("casa")
// stringArray.push(300) aqui gera outro erro pois definimos o type