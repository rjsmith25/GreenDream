const express = require("express");
const homeController = require("./home.controller").default;

const homeRouter = express.Router();

homeRouter.get("/", homeController);

module.exports = homeRouter;
