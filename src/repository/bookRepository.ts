import { Book } from "../protocols/book.js";
import connection from '../database/dbconnector.js';
import { QueryResult } from "pg";

function findBooks(): Promise<QueryResult<Book[]>> {
    return connection.query(`
        SELECT
            "bookTitle",
            "pages",
            "status"
        FROM books;
    `);
}

function findOneBook(bookId: number): Promise<QueryResult<Book>> {
    return connection.query(`
        SELECT *
        FROM books
        WHERE id = $1;
    `, [bookId]);
}

function insertBooks(bookTitle: string, pages: number, status: string) {
    return connection.query(`
        INSERT INTO books
            ("bookTitle", "pages", "status")
        VALUES
            ($1, $2, $3);
    `, [bookTitle, pages, status]);
}

function updateStatus(status: string, bookId:number) {
    return connection.query(`
        UPDATE books
        SET status = $1
        WHERE id = $2;
    `, [status, bookId]);
}

function excludeBook(bookId: number) {
    return connection.query(`
        DELETE FROM books
        WHERE id = $1;
    `, [bookId]);
}

export { findBooks, findOneBook, insertBooks, updateStatus, excludeBook };