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
const statusCodes_1 = __importDefault(require("../../express/statusCodes"));
const customerService_1 = __importDefault(require("../services/customerService"));
class CustomerController {
    constructor() {
        this.getAllCustomers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const customers = yield this.service.getAllCustomers();
            res.status(statusCodes_1.default.OK).json(customers);
        });
        this.getByIdCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const custumer = yield this.service.getByIdCustomer(id);
            if (!custumer.length) {
                return res.status(statusCodes_1.default.NOT_FOUND)
                    .json({ message: 'Customer not found' });
            }
            res.status(statusCodes_1.default.OK).json(custumer);
        });
        this.saveCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const custumer = req.body;
            const result = yield this.service.saveCustomer(custumer);
            console.log(result);
            return res.status(statusCodes_1.default.OK).json({ message: "Created" });
        });
        this.updateCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = parseInt(req.params.id, 10);
            const customer = req.body;
            yield this.service.updateCustomer(customer, id);
            return res.status(statusCodes_1.default.OK).send("customer updated");
        });
        this.deleteCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = parseInt(req.params.id, 10);
            yield this.service.deleteCustomer(id);
            return res.status(statusCodes_1.default.OK).send("customer detected");
        });
        this.service = new customerService_1.default();
    }
}
exports.default = CustomerController;
