import { verifyToken } from "@utils/index";
import { ICurrentUser } from "@interfaces/types";
import { Request, Response, NextFunction } from "express";
export const auth =
  (role = "") =>
  async (req: ICurrentUser, res: Response, next: NextFunction) => {
    const bearer = req?.headers?.authorization;
    if (!bearer) {
      return res.status(401).json({ error: "unauthorized" });
    }
    const token = bearer.split(" ")[1];
    const payload = verifyToken(token, role);
    if (!payload) {
      return res.status(401).json({ error: "unauthenticated" });
    }
    req.currentUser = { ...payload };
    next();
  };
