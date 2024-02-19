import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";


export const connectDB = async (req, res) => {
    // const db = "mongodb+srv://mohitkmina65:bqguTnPIncYq3e6m@cluster0.9o3jzbn.mongodb.net/expense-tracker?retryWrites=true&w=majority";
    const db ="mongodb://localhost:27017/expense-tracker";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}