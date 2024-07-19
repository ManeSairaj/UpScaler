import mongoose,{ Mongoose } from "mongoose";


const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    con: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached:MongooseConnection = (global as any).mongoose

if(!cached) {
    cached = (global as any).mongoose = {
        con: null, promise: null
    }
}

export const connectToDatabase = async () => {
    if(cached.con) return cached.con;

    if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
        dbName: "clerkUserInfo", bufferCommands: false, connectTimeoutMS: 30000
    })

    cached.con = await cached.promise

    console.log("con :",cached.con);

    return cached.con;
}