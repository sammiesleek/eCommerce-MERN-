import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @fetch all product
// @route GET /api/products
// @access public
export const createProduct = asyncHandler(async (req, res) => {
  const product = new product({
    name: "sample project",
    price: "0",
    user: req.user._id,
    image: "/images/sample.jpeg",
    brand: "sample brand",
    category: "sample category",
    countStock: 0,
    numReviews: 0,
    description: "sample desc",
  });
});

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200);
  res.json(products);
});

// @fetch a product
// @route GET /api/products/:id
// @access public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(200);
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});
