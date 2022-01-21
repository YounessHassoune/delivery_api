import { Schema, model } from "mongoose";
import { IAirline } from "@interfaces/mongoose.types";

const schema = new Schema<IAirline>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

export const Airlines = model<IAirline>("Airlines", schema);
