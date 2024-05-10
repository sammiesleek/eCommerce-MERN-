import express from "express";
const router = express.Router();
import {
  getProducts,
  createProduct,
  getProductById,
} from "../controllers/productController.js";

router.route("/").post(createProduct);
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
