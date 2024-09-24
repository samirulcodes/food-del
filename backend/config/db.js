import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aman:amanaman321@cluster0.iykn9.mongodb.net/food-del').then(() => console.log('DB connected'));
}