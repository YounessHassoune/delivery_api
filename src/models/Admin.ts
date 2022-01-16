import { Schema, model } from "mongoose";
import { IAdmin } from "@interfaces/mongoose.types";

const schema = new Schema<IAdmin>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Admin = model<IAdmin>("Admin", schema);
