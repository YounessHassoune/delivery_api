import { Request } from "express";
import { ValidationChain } from "express-validator";

export interface ICurrentUser extends Request {
  currentUser: object; // or any other type
}
