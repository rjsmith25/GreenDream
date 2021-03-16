const express = require("express");
const { createPayment } = require("./payment.controller");

const paymentRouter = express.Router();

paymentRouter.post("/", createPayment);

module.exports = paymentRouter;
