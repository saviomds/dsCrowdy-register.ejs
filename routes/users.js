import express from "express";
import controllers from "../controllers/controllers.js";

const userRouter = express.Router();

userRouter.post("/register", controllers.postRegister);

export default userRouter;
