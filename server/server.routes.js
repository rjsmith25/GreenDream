// setup all server routes
const express = require("express");
const serverRouter = express.Router();
const homeRoute = require("./Home");
const aboutRoute = require("./About");
const contactRoute = require("./Contact");
const roomsRoute = require("./Rooms");
const roomDetailRoute = require("./RoomDetail");

serverRouter.use("/", homeRoute);
serverRouter.use("/about", aboutRoute);
serverRouter.use("/contact", contactRoute);
serverRouter.use("/rooms", roomsRoute);
serverRouter.use("/room", roomDetailRoute);

module.exports = serverRouter;
