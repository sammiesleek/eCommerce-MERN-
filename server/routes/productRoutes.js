import express from "express";
const router = express.Router();
import { adminProtect, protect } from "../middleware/authMiddleware.js";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";

router.route("/").post(protect, adminProtect, createProduct);
router.route("/").get(getProducts);
router
  .route("/:id")
  .get(protect, adminProtect, getProductById)
  .put(protect, adminProtect, updateProduct);

export default router;
