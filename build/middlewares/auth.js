"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const index_1 = require("../utils/index");
const auth = (role = "") => async (req, res, next) => {
    const bearer = req?.headers?.authorization;
    if (!bearer) {
        return res.status(401).json({ error: "unauthorized" });
    }
    const token = bearer.split(" ")[1];
    const payload = (0, index_1.verifyToken)(token, role);
    if (!payload) {
        return res.status(401).json({ error: "unauthenticated" });
    }
    req.currentUser = { ...payload };
    next();
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map