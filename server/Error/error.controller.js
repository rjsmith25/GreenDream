import React from "react";
import { renderToString } from "react-dom/server";
import GeneralHeaderComponent from "../../client/component/general-header";

function Error(err, req, res, next) {
  let protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  let url = protocol + "://" + req.get("host");
  const title = "OOPS!";
  const errorData = { title };
  const GeneralHeaderContent = renderToString(
    <GeneralHeaderComponent title={title} />
  );
  res.status(err.status || 404);
  res.render("Error/error.pug", { url, errorData, GeneralHeaderContent });
}

export default Error;
