const express = require("express");
const roomRouter = require("./room");

const apiRouter = express.Router();

apiRouter.use("/rooms", roomRouter);

module.exports = apiRouter;
