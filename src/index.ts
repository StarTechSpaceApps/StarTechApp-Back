import express, { Request, Response } from "express";
import { connectToMongoDB } from "./database/connectToMongoDB.js";
import cors from "cors";
import bodyParser from "body-parser";
import questionRoutes from "./routes/questionRoutes.js";
import listRoutes from "./routes/listRoutes.js";
import "dotenv/config"

const app = express();

app.use(cors());
app.use(express.json()); // analiza los cuerpos de las solicitudes entrantes en un formato JSON.
app.use(bodyParser.urlencoded({ extended: true })); // para poder pasar el form a body del front, analiza las solicitudes entrantes (body) en formato URL-encoded.

// Routes

//---------- SERVER - MONGO DB ---------------------

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
  
app.use("/question", questionRoutes);
app.use("/list", listRoutes)
app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

connectToMongoDB(uri!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is listening on port ${PORT}, close with ^C 🚀`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB or starting the server", error);
    process.exit(1); // el proceso termina debido a un error.
  });
