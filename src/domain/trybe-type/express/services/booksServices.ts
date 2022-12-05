import { client } from '../../../../db/config/connection'
import BookModel from '../models/db'
import { IBook } from '../interface/book'

export default class BookService  {
  public model: BookModel

  constructor(){
    this.model = new BookModel()
  }

  public async getAllBooks(): Promise<IBook[]> {
    const book = await this.model.getAllBooks()
    return book
  }

  public async getBayIdBook(id: number): Promise<IBook[]> {
    const book = await this.model.getBayIdBook(id)
    return book
  }

  public async save(value:IBook) {
    const result = await this.model.save(value)
    return result
  }

  public async delete(id:number):Promise<void> {
    const book = await this.model.delete(id)
  }

  public async updateBook(id:number, book:IBook):Promise<void> {
    const result = await this.model.updateBook(id, book)

  }
}