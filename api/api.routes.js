const express = require("express");
const roomRouter = require("./room");
const customerRouter = require("./customer");
const bookingRouter = require("./booking");
const paymentRouter = require("./payment");

const apiRouter = express.Router();

apiRouter.use("/rooms", roomRouter);
apiRouter.use("/customers", customerRouter);
apiRouter.use("/booking", bookingRouter);
apiRouter.use("/payments", paymentRouter);

module.exports = apiRouter;
