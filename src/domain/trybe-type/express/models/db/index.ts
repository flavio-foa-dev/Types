import { client } from '../../../../../db/config/connection'
// console.log(client)
import  {IBook } from '../../interface/book'


export default class BookModel {
  bookAll: string
  bookById: string
  bookSave: string
  bookDelete: string
  bookUpdate: string

  constructor() {
    this.bookAll = "SELECT * FROM books"
    this.bookById = "SELECT * FROM books Where id = $1"
    this.bookSave = 'INSERT INTO books(title, price, author, isbn) VALUES ($1, $2, $3, $4) RETURNING *'
    this.bookDelete = 'DELETE FROM books WHERE id = $1'
    this.bookUpdate = 'UPDATE books SET title=$1, price=$2, author=$3, isbn=$4 WHERE id=$5'

  }
  async getAllBooks(): Promise<IBook[]> {
    const result = await client.query(this.bookAll)
    console.log(result.rows)
    // client.end()
    const books = result.rows
    return books as IBook[];
  }

  async getBayIdBook(id:number): Promise<IBook[]> {
    const result = await client.query(this.bookById, [id])
    console.log(result.rows)
    // client.end()
    const book = result.rows
    return book as IBook[]
  }

  async updateBook(id: number, book:IBook): Promise<void> {
    const parseBook = Object.values(book)
    const result = await client.query(this.bookUpdate, [...parseBook, id])
    console.log(result.rows)
    // client.end()
    // const book = result.rows
    // return book as IBook[]
  }

  async save(value:IBook): Promise<IBook[]> {
    let books = Object.values(value)
    const result = await client.query(this.bookSave, books)
    console.log(result.rowCount)
    const book = result.rows
    return book as IBook[]
  }

  async delete(id: number): Promise<IBook[]>{
    const book = await client.query(this.bookDelete, [id])
    console.log(book.rowCount)
    const result = book.rows
    return result as IBook[]
  }

}

// const books = new BookModel()
// books.getAllBooks("SELECT * FROM books")
// books.getBayIdBook("SELECT * FROM books Where id = 1")
// const text = 'INSERT INTO books(title, price, author, isbn) VALUES ($1, $2, $3, $4) RETURNING *'
// const values = ["Dinosaur Brains", 19.58, "Albert J. Bernstein", "978-0345410214"]
// books.save(text, values)
//books.delete("DELETE FROM books WHERE id = 5")
//books.updateBook("UPDATE books SET title = 'Dinosaur Brains', price=19.58, author = 'Albert J. Bernstein', isbn = '978-0345410214' WHERE id = 4");


