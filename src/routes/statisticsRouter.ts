import express from 'express';
import { getNumberOfBooksRead, getNumberOfPagesReaden } from '../controllers/statisticsController.js';

const statisticsRouter = express.Router();

statisticsRouter.get('/pagesRead', getNumberOfPagesReaden);

statisticsRouter.get('/booksRead', getNumberOfBooksRead);

export default statisticsRouter;