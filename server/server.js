import express from "express";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
dotenv.config();
const port = 5000;
connectDB();
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser
app.use(cookieParser());
// app.use(cors());

app.get("/api", (req, res) => {
  res.send("API is running...");
});
app.use(errorHandler);
// app.use(notFound);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.listen(port, () => console.log(`server running on port ${port}`));
