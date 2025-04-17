import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const x="mongodb+srv://thearushi16:TlLsiixly4IchJVm@cluster0.h0fpw.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0"
    const conn = await mongoose.connect(process.env.MONGODB_URI || x);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};