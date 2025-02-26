import mongoose from 'mongoose';

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pokepack');
        console.log("Database is good to go");
        return mongoose.connection;
    } catch (error) {
        console.log("Couldn't connect to the database!", error);
        throw new Error("AAA");
    }
}

export default db;
