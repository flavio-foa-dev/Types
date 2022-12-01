"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpError = void 0;
const httpError = (err, req, res, next) => {
    const { name, message, details } = err;
    console.log(`name: ${name}, message: ${message}, details: ${details}`);
    switch (name) {
        case 'BadRequestError':
            res.status(400).json({ message });
            break;
        case 'ValidationError':
            res.status(400).json({ message: details[0].message });
            break;
        case 'NotFoundError':
            res.status(404).json({ message });
            break;
        case 'ConflictError':
            res.status(409).json({ message });
            break;
        default:
            console.error(err);
            res.sendStatus(500);
    }
    next();
};
exports.httpError = httpError;
