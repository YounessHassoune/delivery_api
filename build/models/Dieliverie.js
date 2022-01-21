"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deliverie = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    from: {
        type: String,
        required: true,
        trim: true,
    },
    to: {
        type: String,
        required: true,
        trim: true,
    },
    zone: {
        type: String,
        required: true,
        trim: true,
        enum: [
            "National", "Europe", "America", "Asia", "Australia"
        ],
        default: "National"
    },
    price: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: [
            "pending", "inactive", "delivered", "taken"
        ],
        default: "pending"
    },
    vehicle: {
        type: String,
        required: true,
        enum: [
            "car", "small truck", "big truck", "planes"
        ],
    },
    deliveredBy: {
        type: String,
        enum: ['Driver', 'Airline']
    },
    on: {
        type: mongoose_1.Schema.Types.ObjectId,
        refPath: 'deliveredBy'
    }
}, { timestamps: true });
exports.Deliverie = (0, mongoose_1.model)("Deliverie", schema);
//# sourceMappingURL=Dieliverie.js.map