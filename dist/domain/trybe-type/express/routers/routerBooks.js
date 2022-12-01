"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerBook_1 = __importDefault(require("../controllers/controllerBook"));
const router = (0, express_1.Router)();
const booksController = new controllerBook_1.default;
router.get('/books', booksController.getAllBooks);
router.get('/books/:id', booksController.getBayIdBook);
router.post('/book/', booksController.save);
router.delete('/book/:id', booksController.delete);
router.put('/book/:id', booksController.updateBook);
exports.default = router;
