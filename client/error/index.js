import React from "react";
import { hydrate } from "react-dom";
import { GeneralHeader } from "../component";

let data = window.__data__;
delete window.__data__;

let scriptTag = document.getElementById("page-ssr");
scriptTag.remove();

hydrate(
  <GeneralHeader title={data.title} />,
  document.querySelector(".general-header")
);
