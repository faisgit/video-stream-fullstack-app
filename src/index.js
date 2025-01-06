import { app } from "./app.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    const port = process.env.PORT || 5500;

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port} `);
    });
  })
  .catch((error) => {
    console.log("Mongodb Connection failed !!! ", error);
  });

// (async () => {
//     try {
//        await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", (error) => {
//             console.log(`Error: ${error}`)
//             throw error
//        })
//        const port = process.env.PORT || 5000
//        app.listen(port, () => {
//         console.log(`App is running at http://localhost:${port}`)
//        })
//     } catch (error) {
//         console.error("Error: ", error)
//         throw error
//     }
// })()
