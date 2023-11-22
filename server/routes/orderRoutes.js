import express from "express";
const router = express.Router();
import { adminProtect, protect } from "../middleware/authMiddleware.js";

import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  gettAllOrders,
  updateOrderToDelivered,
} from "../controllers/orderController.js";

router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, adminProtect, gettAllOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, adminProtect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, adminProtect, updateOrderToDelivered);

export default router;
