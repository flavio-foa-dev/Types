import { client } from '../models/config/connection'
import BookModel from '../models/db'
import { IBook } from '../interface/book'

export default class BookService  {
  public model: BookModel

  constructor(){
    this.model = new BookModel()
  }

  public async getBookAll(): Promise<IBook[]> {
    const book = await this.model.getAllBooks()
    return book
  }
}