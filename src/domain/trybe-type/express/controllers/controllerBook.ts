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

}