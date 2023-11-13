import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://sammyajayi:explore96@cluster0.tshe2lx.mongodb.net/retailShop?retryWrites=true&w=majority"
    );
    console.log("CONNECTETD");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
