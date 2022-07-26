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
const db_1 = __importDefault(require("../models/db"));
class BookService {
    constructor() {
        this.model = new db_1.default();
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.model.getAllBooks();
            return book;
        });
    }
    getBayIdBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.model.getBayIdBook(id);
            return book;
        });
    }
    save(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.save(value);
            return result;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.model.delete(id);
        });
    }
    updateBook(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.updateBook(id, book);
        });
    }
}
exports.default = BookService;
