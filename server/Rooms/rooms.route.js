const express = require("express");
const roomsController = require("./rooms.controller");

const roomsRouter = express.Router();

roomsRouter.get("/", roomsController);

module.exports = roomsRouter;
