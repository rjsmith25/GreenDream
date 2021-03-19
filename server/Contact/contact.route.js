const express = require("express");
const contactController = require("./contact.controller").default;

const contactRouter = express.Router();

contactRouter.get("/", contactController);

module.exports = contactRouter;
