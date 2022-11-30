"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../config/connection");
class BookModel {
    constructor() {
        this.bookAll = "SELECT * FROM books";
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.client.query(this.bookAll);
            console.log(result.rows);
            // client.end()
            const books = result.rows;
            return books;
        });
    }
    getBayIdBook(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.client.query(sql);
            console.log(result.rows);
            // client.end()
            const book = result.rows;
            return book;
        });
    }
    updateBook(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.client.query(sql);
            console.log(result.rows);
            // client.end()
            const book = result.rows;
            return book;
        });
    }
    save(sql, values) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.client.query(sql, values);
            console.log(result);
            const book = result.rows;
            return book;
        });
    }
    delete(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.client.query(sql);
            console.log(result.rowCount);
            const book = result.rows;
            return book;
        });
    }
}
exports.default = BookModel;
// const books = new BookModel()
// books.getAllBooks("SELECT * FROM books")
// books.getBayIdBook("SELECT * FROM books Where id = 1")
// const text = 'INSERT INTO books(title, price, author, isbn) VALUES ($1, $2, $3, $4) RETURNING *'
// const values = ["Dinosaur Brains", 19.58, "Albert J. Bernstein", "978-0345410214"]
// books.save(text, values)
//books.delete("DELETE FROM books WHERE id = 5")
//books.updateBook("UPDATE books SET title = 'Dinosaur Brains', price=19.58, author = 'Albert J. Bernstein', isbn = '978-0345410214' WHERE id = 4");
