const express = require("express");
const aboutController = require("./about.controller").default;

const aboutRouter = express.Router();

aboutRouter.get("/", aboutController);

module.exports = aboutRouter;
