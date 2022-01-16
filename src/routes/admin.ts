import express from "express";
const router = express.Router();
import { login } from "@controllers/index";
import { adminLoginValidation } from "@middlewares/validation";
router.post("/login", adminLoginValidation, login);

export { router };
