const express = require("express");
const { createCustomer } = require("./customer.controller");

const customerRouter = express.Router();

customerRouter.post("/", createCustomer);

module.exports = customerRouter;
