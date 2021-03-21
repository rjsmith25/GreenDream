import React from "react";
import { renderToString } from "react-dom/server";
import GeneralHeaderComponent from "../../client/component/general-header";

async function About(req, res, next) {
  let protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  let url = protocol + "://" + req.get("host");
  const title = "About Us";
  const aboutData = { title };
  const GeneralHeaderContent = renderToString(
    <GeneralHeaderComponent title={title} />
  );
  try {
    res.render("About/about.pug", { GeneralHeaderContent, aboutData, url });
  } catch (e) {
    next(e);
  }
}

export default About;
