import dotenv from "dotenv"
import connectDB from "./db/db.js";
import app from "./app.js";
dotenv.config()

connectDB()
.then(() => {
    const port = process.env.PORT || 5000
    
    app.on('error',(error) => {
        console.log(`ERROR: ${error}`);
        throw error
    })
    app.get('/', (req, res) => {
        res.send("Welcome to our Home Page")
    })
    app.listen(port,() => {
        console.log(`Server is running at: http://localhost:${port} `)        
    })
})
.catch((error) => {
    console.log("MONGO db Connection failed !!! ", error)
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


