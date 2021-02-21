// setup all server routes
const express = require("express");
const serverRouter = express.Router();
const homeRoute = require("./Home");
const aboutRoute = require("./About");

serverRouter.use("/", homeRoute);
serverRouter.use("/about", aboutRoute);
module.exports = serverRouter;
