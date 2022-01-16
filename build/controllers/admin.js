"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../models/index");
const jwt_1 = require("../utils/jwt");
const login = async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    const error = {
        credentials: "incorrect credentials 👀",
        token: "cant create token 😁",
    };
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const admin = await index_1.Admin.findOne({
        email,
    });
    if (!admin) {
        res.json({ error: error.credentials });
    }
    else {
        if (admin.password == password) {
            const token = (0, jwt_1.createToken)({ admin }, "ADMIN");
            token
                ? res.status(200).json({ token })
                : res.status(500).json({ error: error.token });
        }
        else {
            res.json({ ererror: error.credentials });
        }
    }
};
exports.login = login;
//# sourceMappingURL=admin.js.map