"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLoginValidation = void 0;
const express_validator_1 = require("express-validator");
exports.adminLoginValidation = [
    (0, express_validator_1.check)("password", "password doesnt exists").exists(),
    (0, express_validator_1.check)("email", "Invalid email").exists().isEmail(),
];
//# sourceMappingURL=validation.js.map