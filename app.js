import { configDotenv } from "dotenv";
import Router from "./routes/index.js";
import express from "express";
import expressLayouts from "express-ejs-layouts";
import bcryptjs from "bcryptjs";
import userRouter from "./routes/users.js";
import mongoose from "mongoose";

// Config dotEnv
configDotenv();
// Init app with express
const app = express();

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//BodyParse
app.use(express.urlencoded({ extended: false }));
// App router
app.use("/", Router);
app.use("/users", userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server Started On Port http://localhost:${port}`)
);
