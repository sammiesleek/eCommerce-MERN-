import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @fetch all product
// @route GET /api/products
// @access public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200);
  res.json(products);
});

export const createProduct = asyncHandler(async (req, res) => {
  const {
    user,
    title,
    category,
    price,
    countInStock,
    description,
    images,
    brand,
  } = req.body;

  const product = new Product({
    name: title,
    category,
    user,
    price,
    brand,
    countInStock,
    description,
    image: images,
    published: false,
  });

  const savedProduct = await product.save();

  if (savedProduct) {
    res.status(200).json({ message: "success" });
  } else {
    throw new Error("Eroor adding product");
  }
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
// @update a product
// @route put /api/products/:id
// @access admin
export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    (product.name = req.body.name), (product.brand = req.body.brand);
    product.countInStock = req.body.countInStock;
    product.category = req.body.category;
    product.price = req.body.price;
    product.description = req.body.description;
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }

  const updatedProduct = await product.save();
  if (updateProduct) {
    res.status(200).json({ message: "success" });
  } else {
    res.status(500);
    throw new Error("error  updating product");
  }
});
