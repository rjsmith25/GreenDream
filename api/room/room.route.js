const express = require("express");
const { getAllRooms, getRoomByID } = require("./room.controller");

const roomRouter = express.Router();

roomRouter.get("/", getAllRooms);
roomRouter.get("/:room_id", getRoomByID);

module.exports = roomRouter;
