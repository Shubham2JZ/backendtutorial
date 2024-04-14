import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    console.log(`MongoDB connected! DB Host :${connection.connection.host}`);
  } catch (e) {
    console.log("MONGODB connection FAILED : ", e);
    process.exit(1);
  }
};

export default connectDB;
