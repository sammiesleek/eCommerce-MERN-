import express from "express";
const router = express.Router();
import passport from "../utils/passport.js";
import generateTokens from "../utils/generateTokens.js";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    // Generate tokens and send them in response (or set cookies)
    generateTokens(res, req.user._id);

    // Redirect user to a specific URL after successful authentication
    res.redirect("http://localhost:4000/validate?userId=testing");
  }
);

router.get(
  "/validate",
  asyncHandler(async (req, res, next) => {
    let token;
    // Read JWT from the cookie
    try {
      token = req.cookies.jwt;
      if (token) {
        try {
          const decoded = jwt.verify(token, process.env.JWT_SEC);

          req.user = await User.findById(decoded.userId);

          // Respond with user data or just call next() to continue to another middleware/route
          const userData = {
            _id: req.user._id,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email: req.user.email,
            phone: req.user.phone,
            address: req.user.address,
            isAdmin: req.user.isAdmin,
          };

          res.status(200).json({ message: "valid user", user: userData });
        } catch (error) {
          res.status(401);
          res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
        }
      } else {
        res.status(401);
        res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
      }
    } catch (error) {
      res.json(error);
    }
  })
);

// const check = asyncHandler(async (req, res, next) => {
//   let token;
//   // read jwt from the cookie
//   token = req.cookies.jwt;
//   if (token) {
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SEC);

//       req.user = await User.findById(decoded.userId)
//       next();
//     } catch (error) {
//       res.status(401);
//       throw new Error("Not authorized, token failed");
//     }
//   } else {
//     res.status(401);
//     throw new Error("Not authorized");
//   }
// });

export default router;
