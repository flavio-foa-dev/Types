interface Todo {
  priority: number;
  description: string;
  done: boolean;
}





const todo:Partial<Todo> = {
 // priority: 0,     um tudo parcial , posso declarar apenas algumas propiedades
  description: "",
  done: false
}

console.log(todo)



interface Book {
  title: string;
  author: string;
  price: number;
}

const book: Book = {
  title: "Book",
  author: "Book",
  price: 50
}

//Omit  Requered
function updateBook(updatedProperty: Pick<Book, "price">){
  return Object.assign(book, updatedProperty)
}

const updatedProperty = {
  price: 100
}

console.log(updateBook(updatedProperty))


