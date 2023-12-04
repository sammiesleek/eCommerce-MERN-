import express from "express";
const router = express.Router();
import { adminProtect, protect } from "../middleware/authMiddleware.js";

import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import passport from "../utils/passport.js";

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
// router.get("/auth/google/callback", );
router.route("/").post(registerUser).get(protect, adminProtect, getUsers);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, adminProtect, deleteUser)
  .get(protect, adminProtect, getUserById)
  .put(protect, adminProtect, updateUser);

export default router;
