import React from "react";
import { renderToString } from "react-dom/server";
import GeneralHeaderComponent from "../../client/component/general-header";

function Contact(req, res, next) {
  const title = "Contact";
  const contactData = { title };
  const GeneralHeaderContent = renderToString(
    <GeneralHeaderComponent title={title} />
  );
  try {
    res.render("Contact/contact.pug", { GeneralHeaderContent, contactData });
  } catch (e) {
    next(e);
  }
}

export default Contact;
