import mongoose from "mongoose";

export async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        return conn;
    } catch(err) {
        console.log(err);
    }
}