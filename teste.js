const createObjeto = (data, type) => {
  return { data,
     ...type
  }
}

const data = { name: "flavio", idade: 19 }
let result = createObjeto( data )
console.log(result)