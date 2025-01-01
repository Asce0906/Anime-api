import 'dotenv/config'
import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connection made successfully!"); 
    } catch (error) {
        console.log("Error making connection", error);
        process.exit(1);
    }
};


export default connectDB;