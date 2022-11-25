"use strict";
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["ok"] = 200] = "ok";
    HttpStatus[HttpStatus["created"] = 201] = "created";
    HttpStatus[HttpStatus["internalServeError"] = 500] = "internalServeError";
})(HttpStatus || (HttpStatus = {}));
console.log(HttpStatus.ok);
console.log(HttpStatus.created);
console.log(HttpStatus.internalServeError);
