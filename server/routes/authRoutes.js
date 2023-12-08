import express from "express";
const router = express.Router();
import passport from "../utils/passport.js";

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
    generateTokens(res, req.user._id);
  }
);
export default router;
