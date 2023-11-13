import express from "express";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
dotenv.config();
const port = 5000;
connectDB();
const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.send("API is running...");
});
app.use(errorHandler);
// app.use(notFound);
app.use("/api/products", productRoutes);
app.listen(port, () => console.log(`server running on port ${port}`));
