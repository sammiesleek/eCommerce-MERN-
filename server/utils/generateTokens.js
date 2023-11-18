import jwt from "jsonwebtoken";

const generateTokens = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SEC, {
    expiresIn: "30d",
  });

  // set token as http-only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    Secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateTokens;
