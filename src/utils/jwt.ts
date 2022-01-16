import jwt from "jsonwebtoken";

const SECRET: any = {
  ADMIN: process.env.ADMIN_SECRET_KEY as string,
  MANAGER: process.env.MANAGER_SECRET_KEY as string,
  DELIVERYMANAGER: process.env.DELIVERYMANAGER_SECRET_KEY as string,
};

// generate tokens :
export const createToken = (
  payload: any = null,
  role: string | null = null
) => {
  if (!payload) return null;
  if (!role) return null;

  return SECRET[role]
    ? jwt.sign(payload, SECRET[role] as string, { expiresIn: "1h" })
    : null;
};
// verify tokens
export const verifyToken = (
  token: string | null = null,
  role: string | null = null
) => {
  if (!token) return null;
  if (!role) return null;

  return SECRET[role] ? jwt.verify(token, SECRET[role] as string) : null;
};
