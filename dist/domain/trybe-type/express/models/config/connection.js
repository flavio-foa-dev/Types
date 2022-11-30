"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
exports.client = new pg_1.Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234"
});
exports.client
    .connect()
    .then(() => console.log('Connected'))
    .catch((err) => console.log('Failed to connect ' + err.message));
//.finally(()=> client.end())
