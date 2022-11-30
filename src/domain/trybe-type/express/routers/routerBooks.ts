import { Router } from 'express';
import BooksControllers from '../controllers/controllerBook'

const router = Router()
const booksController = new BooksControllers

router.get('/books', booksController.getAllBooks)
router.get('/books/:id', booksController.getBayIdBook)
router.post('/book/', booksController.save)


export default router