import { check } from "express-validator";

export const adminLoginValidation = [
  check("password", "password doesnt exists").exists(),
  check("email", "Invalid email").exists().isEmail(),
];
