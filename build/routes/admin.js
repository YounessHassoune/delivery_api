"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const index_1 = require("../controllers/index");
const validation_1 = require("../middlewares/validation");
router.post("/login", validation_1.adminLoginValidation, index_1.login);
//# sourceMappingURL=admin.js.map