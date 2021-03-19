import React from "react";
import { renderToString } from "react-dom/server";
import GeneralHeaderComponent from "../../client/component/general-header";

async function About(req, res, next) {
  const title = "About Us";
  const aboutData = { title };
  const GeneralHeaderContent = renderToString(
    <GeneralHeaderComponent title={title} />
  );
  try {
    res.render("About/about.pug", { GeneralHeaderContent, aboutData });
  } catch (e) {
    next(e);
  }
}

export default About;
