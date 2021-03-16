const express = require("express");
const { createBooking } = require("./booking.controller");

const bookingRouter = express.Router();

bookingRouter.post("/", createBooking);

module.exports = bookingRouter;
