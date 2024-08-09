import express from "express";
const router = express.Router();
import { adminProtect, protect } from "../middleware/authMiddleware.js";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

router.route("/").post(protect, adminProtect, createProduct);
router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, adminProtect, updateProduct)
  .delete(protect, adminProtect, deleteProduct);

export default router;
