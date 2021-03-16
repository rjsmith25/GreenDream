import React from "react";
import { hydrate } from "react-dom";
import HomeSearch from "./home-search";

hydrate(<HomeSearch />, document.querySelector(".hotel-search"));
