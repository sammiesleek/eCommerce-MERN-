import express from "express";
const router = express.Router();
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import { adminProtect, protect } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getCategories)
  .post(protect, adminProtect, createCategory);

router
  .route("/:id")
  .put(protect, adminProtect, updateCategory)
  .delete(protect, adminProtect, deleteCategory);
// router.route("/").post(createProduct);
// router.route("/:id").get(getProductById);

export default router;
