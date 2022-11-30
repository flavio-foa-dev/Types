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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes_1 = __importDefault(require("../statusCodes"));
const booksServices_1 = __importDefault(require("../services/booksServices"));
class BookController {
    constructor(booksServices = new booksServices_1.default()) {
        this.booksServices = booksServices;
        this.getAllBooks = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const book = yield this.booksServices.getBookAll();
            res.status(statusCodes_1.default.OK).json(book);
        });
        this.getBayIdBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const book = yield this.booksServices.getBayIdBook(id);
            if (!book.length) {
                return res.status(statusCodes_1.default.NOT_FOUND)
                    .json({ message: 'Book not found' });
            }
            res.status(statusCodes_1.default.OK).json(book);
        });
    }
}
exports.default = BookController;
