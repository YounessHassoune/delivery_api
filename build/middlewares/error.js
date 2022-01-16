"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.handleError = void 0;
const handleError = (error, request, response, next) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    response.status(status).json({ message, status });
};
exports.handleError = handleError;
const notFound = (request, response, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
};
exports.notFound = notFound;
//# sourceMappingURL=error.js.map