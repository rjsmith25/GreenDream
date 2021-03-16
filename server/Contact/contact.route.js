const express = require("express");
const contactController = require("./contact.controller");

const contactRouter = express.Router();

contactRouter.get("/", contactController);

module.exports = contactRouter;
