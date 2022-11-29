import { client } from './config'

// console.log(client)

export interface IBook {
  id?: number,
  title: string,
  price: number,
  author: string,
  isbn: string,
}

class Main {
  constructor() {

  }

  async getAllBooks(sql:string): Promise<IBook[]> {
    const result = await client.query(sql)
    console.log(result.rows)
    // client.end()
    const books = result.rows
    return books as IBook[];
  }

  async getBayIdBook(sql:string): Promise<IBook[]> {
    const result = await client.query(sql)
    console.log(result.rows)
    // client.end()
    const book = result.rows
    return book as IBook[]
  }

  async updateBook(sql: string): Promise<IBook[]> {
    const result = await client.query(sql)
    console.log(result.rows)
    // client.end()
    const book = result.rows
    return book as IBook[]
  }

  async save(sql: string, values: any): Promise<IBook[]> {
    const result = await client.query(sql, values)
    console.log(result)
    const book = result.rows
    return book as IBook[]
  }

  async delete(sql: string): Promise<IBook[]>{
    const result = await client.query(sql)
    console.log(result.rowCount)
    const book = result.rows
    return book as IBook[]
  }

}

const books = new Main()

books.getAllBooks("SELECT * FROM books")
// books.getBayIdBook("SELECT * FROM books Where id = 1")
// const text = 'INSERT INTO books(title, price, author, isbn) VALUES ($1, $2, $3, $4) RETURNING *'
// const values = ["Dinosaur Brains", 19.58, "Albert J. Bernstein", "978-0345410214"]
// books.save(text, values)
//books.delete("DELETE FROM books WHERE id = 5")
//books.updateBook("UPDATE books SET title = 'Dinosaur Brains', price=19.58, author = 'Albert J. Bernstein', isbn = '978-0345410214' WHERE id = 4");


