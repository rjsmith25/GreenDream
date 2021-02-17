// setup all server routes
const express = require("express");
const serverRouter = express.Router();
const homeRoute = require("./Home");

serverRouter.use("/", homeRoute);
module.exports = serverRouter;
