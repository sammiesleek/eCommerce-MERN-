import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
dotenv.config();
const port = 5000;
connectDB();
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sessions

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// cookie parser
app.use(cookieParser());

app.get("/api", (req, res) => {
  res.send("API is running...");
});
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paystack", (req, res) =>
  res.status(200).send({ clientId: process.env.REACT_APP_PAYSTAC_KEY })
);

app.listen(port, () => console.log(`server running on port ${port}`));
app.use(errorHandler);
app.use(notFound);
