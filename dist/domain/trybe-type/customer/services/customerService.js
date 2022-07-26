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
const customerModel_1 = __importDefault(require("../model/customerModel"));
const connection_1 = require("../../../../db/config/connection");
class customerService {
    constructor() {
        this.model = new customerModel_1.default(connection_1.client);
    }
    getAllCustomers() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const custumer = yield ((_a = this.model) === null || _a === void 0 ? void 0 : _a.getAllCustomers());
            return custumer;
        });
    }
    getByIdCustomer(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const custumer = yield ((_a = this.model) === null || _a === void 0 ? void 0 : _a.getByIdCustomer(id));
            return custumer;
        });
    }
    saveCustomer(values) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ((_a = this.model) === null || _a === void 0 ? void 0 : _a.saveCustomer(values));
            console.log(result);
        });
    }
    updateCustomer(custumer, id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ((_a = this.model) === null || _a === void 0 ? void 0 : _a.updateCustomer(custumer, id));
            console.log(result);
        });
    }
    deleteCustomer(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ((_a = this.model) === null || _a === void 0 ? void 0 : _a.deleteCustomer(id));
            console.log(result);
        });
    }
}
exports.default = customerService;
