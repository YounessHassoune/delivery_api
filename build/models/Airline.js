"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airlines = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });
exports.Airlines = (0, mongoose_1.model)("Airlines", schema);
//# sourceMappingURL=Airline.js.map