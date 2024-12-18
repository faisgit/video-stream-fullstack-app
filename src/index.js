import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/db.js";

dotenv.config()
const app = express()

const port = process.env.PORT || 5000
app.listen(port, () => {
    connectDB()
    console.log(`The Server has been started at http://localhost:port${port}`)
})

// (async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URI)
//         app.on('error', (error) => {
//             console.log(`ERROR: ${error}`);
//             throw error
            
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server has started at http://localhost:${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error(`Error: ${error}`);
//         throw error
        
//     }
// })()


