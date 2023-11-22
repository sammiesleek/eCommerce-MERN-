import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @create new order
// @route  POST /api/orders
// @access private

export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order Items");
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems: orderItems.map((item) => ({
        ...item,
        product: item._id,
        _id: undefined,
      })),
      shippingAddress: shippingAddress.address,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(200).json(createdOrder);
  }
});

// @get user orders
// @route  GET /api/orders
// @access private

export const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

// @get  order by ID
// @route  GET /api/orders/:id
// @access private

export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @update order to paid
// @route  GET /api/orders/:id/pay
// @access private

export const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

// @update order to paid
// @route  GET /api/orders/:id/pay
// @access private

export const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivere");
});

// @get all orders
// @route  GET /api/orders
// @access private

export const gettAllOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});
