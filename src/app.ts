import express, { json } from 'express';
import cors from 'cors';
import bookRouter from './routes/booksRouter.js';
import statisticsRouter from './routes/statisticsRouter.js';

const server = express();
server.use(json());
server.use(cors());

server.use(bookRouter);
server.use(statisticsRouter);

server.listen(4000, () => [
    console.log('Server listening on route 4000')
])