import { Router } from 'express';
import BooksControllers from '../controllers/controllerBook'

const router = Router()
const booksController = new BooksControllers

router.get('/books', booksController.getAllBooks)

export default router