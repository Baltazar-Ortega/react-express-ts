import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import citasRouter from "./routes/citasRoutes";

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri: string | undefined = process.env.ATLAS_URI;
if (uri) {
  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
}

app.use("/citas", citasRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
