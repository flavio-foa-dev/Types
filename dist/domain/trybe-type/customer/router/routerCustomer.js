"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customerController_1 = __importDefault(require("../controllers/customerController"));
const customerControler = new customerController_1.default();
const router = (0, express_1.Router)();
router.get('/customer', customerControler.getAllCustomers);
router.get('/customer/:id', customerControler.getByIdCustomer);
exports.default = router;
