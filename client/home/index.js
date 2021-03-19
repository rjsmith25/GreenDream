import React from "react";
import { hydrate } from "react-dom";
import HomeSearch from "./home-search";
import HomeHeader from "./home-header";

hydrate(<HomeHeader />, document.querySelector(".header-top"));
hydrate(<HomeSearch />, document.querySelector(".hotel-search"));
