const express = require("express");
const roomsController = require("./rooms.controller").default;

const roomsRouter = express.Router();

roomsRouter.get("/", roomsController);

module.exports = roomsRouter;
