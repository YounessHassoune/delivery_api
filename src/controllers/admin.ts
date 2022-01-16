import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { Admin } from "@models/index";
import { createToken } from "@utils/jwt";
const login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  const error = {
    credentials: "incorrect credentials 👀",
    token: "cant create token 😁",
  };
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const admin = await Admin.findOne({
    email,
  });
  if (!admin) {
    res.json({ error: error.credentials });
  } else {
    if (admin.password == password) {
      const token = createToken({ admin }, "ADMIN");
      token
        ? res.status(200).json({ token })
        : res.status(500).json({ error: error.token });
    } else {
      res.json({ ererror: error.credentials });
    }
  }
};

export { login };
