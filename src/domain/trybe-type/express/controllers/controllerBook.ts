import { Request, Response } from "express";
import statusCodes from "../statusCodes"
import BookService from "../services/booksServices"

export default class BookController {

  constructor(private booksServices = new BookService()) {

  }

  public getAllBooks = async(_req: Request, res: Response) => {
    const book = await this.booksServices.getBookAll();
    res.status(statusCodes.OK).json(book);
  };

  public getBayIdBook = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const book = await this.booksServices.getBayIdBook(id)

    if(!book.length) {
      return res.status(statusCodes.NOT_FOUND)
        .json({ message: 'Book not found'})
    }
    res.status(statusCodes.OK).json(book)
  }

}