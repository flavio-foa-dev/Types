"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["ok"] = 200] = "ok";
    HttpStatus[HttpStatus["created"] = 201] = "created";
    HttpStatus[HttpStatus["internalServeError"] = 500] = "internalServeError";
})(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));
console.log(HttpStatus.ok);
console.log(HttpStatus.created);
console.log(HttpStatus.internalServeError);
