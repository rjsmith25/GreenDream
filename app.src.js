import express from "express";
import path from "path";
import compression from "compression";
import server from "./server";
import api from "./api";

// express app
const app = express();

// disable x-powered by
app.disable("x-powered-by");

// set up port to listen on
app.set("port", process.env.PORT || 3000);

// view engine setup
app.set("views", path.join(__dirname, "server"));
app.set("view engine", "pug");

// serve static files
app.use(express.static("./public"));

// reduce the size of the response body for performance
app.use(compression());

// Parse incoming post request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup server routing
app.use("/", server);
app.use("/api", api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// handle 404 if page does not exist
app.use((err, req, res, next) => {
  res.status(err.status || 404);
  res.render("Components/error.pug");
});

// log general uncaught promise errors
process.on("unhandledRejection", (reason) => {
  console.log("Unhandled Rejection at:", reason.stack || reason);
});

// start server
const startServer = app.listen(app.get("port"), () => {
  console.log(`listening on port: ${startServer.address().port}`);
});
