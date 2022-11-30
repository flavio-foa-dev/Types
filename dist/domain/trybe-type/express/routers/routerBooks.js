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
exports.default = router;
