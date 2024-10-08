import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to DB");
}
).catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("Server is running");
});

app.use("/api/users",userRoute);