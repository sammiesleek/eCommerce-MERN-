import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import Category from "./models/categoryModel.js";
import connectDB from "./config/db.js";
import products from "./data/products.js";
import categories from "./data/categories.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    const sampleCategory = categories.map((category) => {
      return { ...category, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    await Category.insertMany(sampleCategory);
    console.log("Data Imported !".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.yellow.bold);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // await Order.deleteMany();
    // await Product.deleteMany();
    // await User.deleteMany();
    await Category.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
