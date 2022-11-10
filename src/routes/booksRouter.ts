import express from 'express';
import { deleteBook, getBooks, postBooks, putStatus } from '../controllers/booksController.js';
import { checkIfBooksExists, validateBook } from '../middlewares/booksMiddlewares.js';

const bookRouter = express.Router();

bookRouter.get('/books', getBooks);

bookRouter.post('/books', validateBook, postBooks);

bookRouter.put('/books/:id', checkIfBooksExists, putStatus);

bookRouter.delete('/books/delete/:id', checkIfBooksExists, deleteBook);

export default bookRouter;