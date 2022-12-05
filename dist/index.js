"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const statusCodes_1 = __importDefault(require("./domain/trybe-type/express/statusCodes"));
require("express-async-errors");
const routerBooks_1 = __importDefault(require("./domain/trybe-type/express/routers/routerBooks"));
const routerCustomer_1 = __importDefault(require("./domain/trybe-type/customer/router/routerCustomer"));
const error_1 = require("./domain/trybe-type/express/middlewares/error");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get('/', (req, res) => {
    res.status(statusCodes_1.default.OK).send("Express TypeScript");
});
app.use(routerBooks_1.default);
app.use(routerCustomer_1.default);
app.use(error_1.httpError);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
