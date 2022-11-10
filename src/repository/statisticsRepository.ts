import connection from '../database/dbconnector.js';
import { QueryResult } from "pg";
import { Sum } from '../protocols/sum.js';
import { Count } from '../protocols/count.js';

function pagesRead(): Promise<QueryResult<Sum>> {
    return connection.query(`
        SELECT SUM(pages)
        FROM books
        WHERE status = 'Livro lido';
    `);
}

function booksRead(): Promise<QueryResult<Count>> {
    return connection.query(`
        SELECT COUNT(id) as count
        FROM books
        WHERE status = 'Livro lido';
    `);
}

export { pagesRead, booksRead };