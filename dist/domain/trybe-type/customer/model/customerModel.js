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
class CustomerModel {
    constructor(client) {
        this.client = client;
        this.AllCustomers = 'SELECT * FROM tbl_customer';
        this.customerById = "SELECT * FROM tbl_customer Where id = $1";
        this.customerSave = 'INSERT INTO tbl_customer(name, email, password) VALUES ($1, $2, $3) RETURNING *';
        this.customerDelete = 'DELETE FROM tbl_customer WHERE id = $1';
        this.customerUpdate = 'UPDATE tbl_customer SET name=$1, email=$2, password=$3, WHERE id=$5';
    }
    getAllCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.client.query(this.AllCustomers);
            const custumer = result.rows;
            return custumer;
        });
    }
    getByIdCustomer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.client.query(this.customerById, [id]);
            const custumer = result.rows;
            return custumer;
        });
    }
}
exports.default = CustomerModel;
