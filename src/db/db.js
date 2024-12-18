import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error(`MONGODB connection error ${error}`)
        process.exit()
    }
}
export default connectDB