"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = {
    ADMIN: process.env.ADMIN_SECRET_KEY,
    MANAGER: process.env.MANAGER_SECRET_KEY,
    DELIVERYMANAGER: process.env.DELIVERYMANAGER_SECRET_KEY,
};
// generate tokens :
const createToken = (payload = null, role = null) => {
    if (!payload)
        return null;
    if (!role)
        return null;
    return SECRET[role]
        ? jsonwebtoken_1.default.sign(payload, SECRET[role], { expiresIn: "1h" })
        : null;
};
exports.createToken = createToken;
// verify tokens
const verifyToken = (token = null, role = null) => {
    if (!token)
        return null;
    if (!role)
        return null;
    return SECRET[role] ? jsonwebtoken_1.default.verify(token, SECRET[role]) : null;
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map