import express from "express";
import controllers from "../controllers/controllers.js";

const Router = express.Router();

Router.get("/", controllers.getView);
Router.get("/Welcome", controllers.getView);
Router.get("/users/home", controllers.getHome);
Router.get("/users/", controllers.getRegister);
Router.get("/users/login", controllers.getLogin);
Router.get("/users/register", controllers.getRegister);

export default Router;
