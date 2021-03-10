const express = require("express");
const roomDetailController = require("./roomdetail.controller").default;

const roomDetailRouter = express.Router();

roomDetailRouter.get("/:id", roomDetailController);

module.exports = roomDetailRouter;
