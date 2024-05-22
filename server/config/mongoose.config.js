import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const DB_Name = process.env.DB_Name

async function dbConnect() {
    try {
        await connect(MONGODB_URI, {
            dbName: DB_Name
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default dbConnect;

