import express from "express";
import products from "./data/products.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
const port = 5000;
connectDB();
const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.send("API is running...");
});
app.get("/api/products", (req, res) => {
  res.send(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id == req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.send("product not found!!");
  }
});

app.listen(port, () => console.log(`server running on port ${port}`));
