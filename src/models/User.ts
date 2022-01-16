import { Schema, model } from "mongoose";
import { IUser } from "@interfaces/mongoose.types";

const schema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const User = model<IUser>("User", schema);
